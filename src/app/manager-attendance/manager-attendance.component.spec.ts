import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAttendanceComponent } from './manager-attendance.component';

describe('ManagerAttendanceComponent', () => {
  let component: ManagerAttendanceComponent;
  let fixture: ComponentFixture<ManagerAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerAttendanceComponent]
    });
    fixture = TestBed.createComponent(ManagerAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
