import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAssignedTaskComponent } from './manager-assigned-task.component';

describe('ManagerAssignedTaskComponent', () => {
  let component: ManagerAssignedTaskComponent;
  let fixture: ComponentFixture<ManagerAssignedTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerAssignedTaskComponent]
    });
    fixture = TestBed.createComponent(ManagerAssignedTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
