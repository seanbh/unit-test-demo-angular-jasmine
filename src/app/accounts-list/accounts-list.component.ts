import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss'],
})
export class AccountsListComponent implements OnInit {
  accountsList: string[] = [];
  selectedAccountsList: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.accountsList = ['a', 'b', 'c'];
  }

  toggleSelected(account: string) {
    const idx = this.selectedAccountsList.indexOf(account);
    if (idx > -1) {
      this.selectedAccountsList.splice(idx, 1);
    } else {
      this.selectedAccountsList.push(account);
    }
  }
}
