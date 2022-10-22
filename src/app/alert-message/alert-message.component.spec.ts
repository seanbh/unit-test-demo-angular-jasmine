import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertMessageComponent } from './alert-message.component';

describe('AlertMessageComponent', () => {
  let component: AlertMessageComponent;
  let fixture: ComponentFixture<AlertMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertMessageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct alert message', () => {
    component.accountName = 'MyAccount2343';
    fixture.detectChanges();
    const correctMessage = `Are you sure you want to delete ${component.accountName}`;
    const alertButton = fixture.nativeElement.querySelector('#alertButton');
    spyOn(window, 'alert');

    alertButton.dispatchEvent(new Event('click'));

    expect(window.alert).toHaveBeenCalledWith(correctMessage);
  });
});
