import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerEditTaskComponent } from './manager-edit-task.component';

describe('ManagerEditTaskComponent', () => {
  let component: ManagerEditTaskComponent;
  let fixture: ComponentFixture<ManagerEditTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerEditTaskComponent]
    });
    fixture = TestBed.createComponent(ManagerEditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
