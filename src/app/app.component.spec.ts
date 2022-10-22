import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { AppComponent } from './app.component';
import { DisplayValueRegressionComponent } from './display-value-regression/display-value-regression.component';
import { NullCheckComponent } from './null-check/null-check.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [
        AppComponent,
        NullCheckComponent,
        DisplayValueRegressionComponent,
        AccountsListComponent,
        AlertMessageComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'unit-test-demo-angular-jasmine'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('unit-test-demo-angular-jasmine');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain(
  //     'unit-test-demo-angular-jasmine app is running!'
  //   );
  // });
});
