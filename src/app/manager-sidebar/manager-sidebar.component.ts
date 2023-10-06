import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-manager-sidebar',
  templateUrl: './manager-sidebar.component.html',
  styleUrls: ['./manager-sidebar.component.css']
})
export class ManagerSidebarComponent {
  constructor(private router:Router) {
  }
  createMember() {
      this.router.navigate(["/create-member"])
  }
  createTasks() {
    this.router.navigate(["/create-task"])
  }

  viewAssignedTasks() {
    this.router.navigate(["/assigned-task"])
  }

  viewEmployees() {
    this.router.navigate(["/employees"])
  }

  doChats() {
    this.router.navigate(["/do-chat"])
  }


  managerSignedOut() {
    this.router.navigate(["/manager-sign-out"])
  }

  viewAnnouncement() {
    this.router.navigate(["/view-announcement"])
  }
}
