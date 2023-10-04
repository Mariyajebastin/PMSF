import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ManagerSidebarComponent } from './manager-sidebar/manager-sidebar.component';
import { ProjectstatusCardComponent } from './projectstatus-card/projectstatus-card.component';
import { SidebarIconsComponent } from './sidebar-icons/sidebar-icons.component';
import { DateTimeFieldComponent } from './date-time-field/date-time-field.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { ManagerAssignedTaskComponent } from './manager-assigned-task/manager-assigned-task.component';
import { ManagerNewAnnouncementComponent } from './manager-new-announcement/manager-new-announcement.component';
import { AnnouncementCardComponent } from './announcement-card/announcement-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ManagerLoginComponent,
    TextFieldComponent,
    ManagerDashboardComponent,
    ManagerSidebarComponent,
    ProjectstatusCardComponent,
    SidebarIconsComponent,
    DateTimeFieldComponent,
    CreateMemberComponent,
    CreateTaskComponent,
    MultiSelectComponent,
    ManagerAssignedTaskComponent,
    ManagerNewAnnouncementComponent,
    AnnouncementCardComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
