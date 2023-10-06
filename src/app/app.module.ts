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
import { ManagerEmployeesComponent } from './manager-employees/manager-employees.component';
import { ManagerChatComponent } from './manager-chat/manager-chat.component';
import { ManagerSideIconsComponent } from './manager-side-icons/manager-side-icons.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeSidebarComponent } from './employee-sidebar/employee-sidebar.component';
import { EmployeeTaskCardComponent } from './employee-task-card/employee-task-card.component';
import { EmployeeTaskComponent } from './employee-task/employee-task.component';
import { EmployeeSidebarIconsComponent } from './employee-sidebar-icons/employee-sidebar-icons.component';
import { EmployeeAnnouncementComponent } from './employee-announcement/employee-announcement.component';
import { EmployeeChatComponent } from './employee-chat/employee-chat.component';
import { EmployeeSidebarIconComponent } from './employee-sidebar-icon/employee-sidebar-icon.component';
import {RouterModule, Routes} from "@angular/router";
// EmployeeLoginComponent



const routes: Routes = [
  // Employee portal
  { path: 'employee', component: EmployeeLoginComponent },
  { path: 'announcement', component:EmployeeAnnouncementComponent},
  { path: 'tasks', component:EmployeeTaskComponent},
  { path: 'chats', component:EmployeeChatComponent},
  { path: 'signout', component:EmployeeLoginComponent},

  // Manager portal
  { path: 'manager', component: ManagerLoginComponent },
  { path: 'dashboard', component: ManagerDashboardComponent },
  { path: 'create-member', component: CreateMemberComponent },
  { path: 'create-task', component: CreateTaskComponent },
  { path: 'assigned-task', component: ManagerAssignedTaskComponent },
  { path: 'view-announcement', component:ManagerNewAnnouncementComponent},
  { path: 'employees', component: ManagerEmployeesComponent },
  { path: 'do-chat', component: ManagerChatComponent },
  { path: 'manager-sign-out', component:ManagerLoginComponent}

];

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
    AnnouncementCardComponent,
    ManagerEmployeesComponent,
    ManagerChatComponent,
    ManagerSideIconsComponent,
    EmployeeLoginComponent,
    EmployeeSidebarComponent,
    EmployeeTaskCardComponent,
    EmployeeTaskComponent,
    EmployeeSidebarIconsComponent,
    EmployeeAnnouncementComponent,
    EmployeeChatComponent,
    EmployeeSidebarIconComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
