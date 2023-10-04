import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerNewAnnouncementComponent } from './manager-new-announcement.component';

describe('ManagerNewAnnouncementComponent', () => {
  let component: ManagerNewAnnouncementComponent;
  let fixture: ComponentFixture<ManagerNewAnnouncementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerNewAnnouncementComponent]
    });
    fixture = TestBed.createComponent(ManagerNewAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
