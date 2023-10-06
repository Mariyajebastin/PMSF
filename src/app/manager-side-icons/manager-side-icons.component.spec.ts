import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSideIconsComponent } from './manager-side-icons.component';

describe('ManagerSideIconsComponent', () => {
  let component: ManagerSideIconsComponent;
  let fixture: ComponentFixture<ManagerSideIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerSideIconsComponent]
    });
    fixture = TestBed.createComponent(ManagerSideIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
