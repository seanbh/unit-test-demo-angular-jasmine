import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { first, of, Subject, takeUntil } from 'rxjs';
import { AccountDataService } from '../core/account-data.service';

@Component({
  selector: 'app-display-value-regression',
  templateUrl: './display-value-regression.component.html',
  styleUrls: ['./display-value-regression.component.scss'],
})
export class DisplayValueRegressionComponent implements OnInit, OnDestroy {
  // CDP-10551
  /*
    Could break by:
      -Moving out of *ngIf
      -Not calling setText() after edit
      -Not calling populateData() on edit
      -Setting isEditing false
      -Resetting control value
  */
  destroy$ = new Subject<boolean>();

  accounts = ['Bill Johnson'];
  account = new FormControl('');
  isEditing = false;

  constructor(private accountDataService: AccountDataService) {}

  ngOnInit(): void {}

  edit(): void {
    this.isEditing = true;
    this.populateData();
    //this.isEditing = false;
  }
  populateData(): void {
    this.accounts = [];
    this.accountDataService
      .getAccountData()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.setText(data);
        //...
        //this.account.setValue('');
      });
  }
  setText(data: { name: string }) {
    this.account.setValue(data?.name);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
