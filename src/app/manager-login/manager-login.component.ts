import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent {

  constructor(private router:Router) {
  }

  doLogin() {
    this.router.navigate(['/dashboard']);
  }
}
