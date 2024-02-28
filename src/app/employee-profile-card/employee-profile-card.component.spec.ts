import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfileCardComponent } from './employee-profile-card.component';

describe('EmployeeProfileCardComponent', () => {
  let component: EmployeeProfileCardComponent;
  let fixture: ComponentFixture<EmployeeProfileCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeProfileCardComponent]
    });
    fixture = TestBed.createComponent(EmployeeProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
