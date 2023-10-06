import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTaskCardComponent } from './employee-task-card.component';

describe('EmployeeTaskCardComponent', () => {
  let component: EmployeeTaskCardComponent;
  let fixture: ComponentFixture<EmployeeTaskCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeTaskCardComponent]
    });
    fixture = TestBed.createComponent(EmployeeTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
