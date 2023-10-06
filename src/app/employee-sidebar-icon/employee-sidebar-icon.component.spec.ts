import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSidebarIconComponent } from './employee-sidebar-icon.component';

describe('EmployeeSidebarIconComponent', () => {
  let component: EmployeeSidebarIconComponent;
  let fixture: ComponentFixture<EmployeeSidebarIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeSidebarIconComponent]
    });
    fixture = TestBed.createComponent(EmployeeSidebarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
