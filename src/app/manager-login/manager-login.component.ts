import { Component, Input } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent {
  public loginForm : FormGroup | any
  constructor(private router:Router,) {
    this.loginForm = new FormControl( {
      email_id : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required])
      }
    )
  }

  doLogin() {
    if (this.loginForm.valid){
      
    }
    this.router.navigate(['/dashboard']);
  }
}
