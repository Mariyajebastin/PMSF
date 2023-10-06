import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-sidebar',
  templateUrl: './employee-sidebar.component.html',
  styleUrls: ['./employee-sidebar.component.css']
})
export class EmployeeSidebarComponent {

  constructor(private router:Router) {

  }
  showTask() {

    this.router.navigate(["/tasks"])

  }
  showAnnouncement() {
    this.router.navigate(["/announcement"])
  }


  showChats() {
    this.router.navigate(["/chats"])
  }

  signout(){
    this.router.navigate(["/signout"])
  }
}
