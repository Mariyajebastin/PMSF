import { Component, Input } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {WebapiService} from "../webapi.service"
import {Router} from "@angular/router";

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent {
  public loginForm : FormGroup | any
  constructor(public router:Router, private http: WebapiService) {
    this.loginForm = new FormGroup ({
      email_id : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
    })
  }

  doLogin() {
    if(this.loginForm.valid){
      const formData = this.loginForm.value;
      this.http.doLogin(formData).subscribe(
        response =>{
          let res = JSON.parse(JSON.stringify(response));
          console.log("from 25",res)
          this.router.navigate(['/dashboard']);
          this.loginForm.reset()
        },error =>{
          console.log(error)
        }
      )
    }
    else {
      this.loginForm.markAllAsTouched();
    }

  }
}
