import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  constructor(private router:Router) {
  }

  doLogin() {
    this.router.navigate(['/announcement']);
  }
}
