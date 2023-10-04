import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarIconsComponent } from './sidebar-icons.component';

describe('SidebarIconsComponent', () => {
  let component: SidebarIconsComponent;
  let fixture: ComponentFixture<SidebarIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarIconsComponent]
    });
    fixture = TestBed.createComponent(SidebarIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
