import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AccountDataService } from '../core/account-data.service';

import { DisplayValueRegressionComponent } from './display-value-regression.component';

describe('DisplayValueRegressionComponent', () => {
  let component: DisplayValueRegressionComponent;
  let fixture: ComponentFixture<DisplayValueRegressionComponent>;
  const accountDataService = jasmine.createSpyObj('AccountDataService', [
    'getAccountData',
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [DisplayValueRegressionComponent],
      providers: [
        { provide: AccountDataService, useValue: accountDataService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayValueRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show account label if isEditing is true', () => {
    component.isEditing = true;
    fixture.detectChanges();
    let accountLabel = fixture.nativeElement.querySelector('#accountLabel');
    expect(accountLabel).toBeTruthy();
  });

  it('should show not show account label if isEditing is false', () => {
    component.isEditing = false;
    fixture.detectChanges();
    let accountLabel = fixture.nativeElement.querySelector('#accountLabel');
    expect(accountLabel).toBeNull();
  });

  it('should display name in account label when Edit is clicked', () => {
    const getAccountDataSpy = accountDataService.getAccountData.and.returnValue(
      of({ name: 'Mary Wilson' })
    );
    const editButton = fixture.nativeElement.querySelector('#editButton');
    editButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    let accountLabel = fixture.nativeElement.querySelector('#accountLabel');
    expect(accountLabel.textContent).toBe('Mary Wilson');
    expect(getAccountDataSpy)
      .withContext('getAccountData called exactly once')
      .toHaveBeenCalledTimes(1);
  });
});
