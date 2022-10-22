import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NullCheckComponent } from './null-check.component';

describe('NullCheckComponent', () => {
  let component: NullCheckComponent;
  let fixture: ComponentFixture<NullCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NullCheckComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NullCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
