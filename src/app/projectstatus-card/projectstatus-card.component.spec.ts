import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectstatusCardComponent } from './projectstatus-card.component';

describe('ProjectstatusCardComponent', () => {
  let component: ProjectstatusCardComponent;
  let fixture: ComponentFixture<ProjectstatusCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectstatusCardComponent]
    });
    fixture = TestBed.createComponent(ProjectstatusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
