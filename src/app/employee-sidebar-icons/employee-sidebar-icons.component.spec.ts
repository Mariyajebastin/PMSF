import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSidebarIconsComponent } from './employee-sidebar-icons.component';

describe('EmployeeSidebarIconsComponent', () => {
  let component: EmployeeSidebarIconsComponent;
  let fixture: ComponentFixture<EmployeeSidebarIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeSidebarIconsComponent]
    });
    fixture = TestBed.createComponent(EmployeeSidebarIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
