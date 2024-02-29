import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { WebapiService } from '../webapi.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  public loginForm : FormGroup | any;
  constructor(private router:Router,private http: WebapiService) {
    this.loginForm = new FormGroup({
      email_id : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required),
    })
  }

  doLogin() {
    if(this.loginForm.valid){
      this.http.loginEmployee(this.loginForm.value).subscribe(
        response =>{
          let serverResponse = JSON.parse(JSON.stringify(response));
           this.router.navigate(['/announcement']);
        }
      )
    }else {
      this.loginForm.markAllAsTouched();
    }
  }
}
