import { Component, ViewChild } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { WebapiService } from '../webapi.service';
import { ToasterComponent } from '../toaster/toaster.component';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent {
  public employeeForm : FormGroup | any;
  @ViewChild('toaster') toaster : ToasterComponent | any
  constructor(private router:Router,private http: WebapiService) {
    this.employeeForm = new FormGroup({
      employee_name : new FormControl('',Validators.required),
      designation : new FormControl('',Validators.required),
      email_id : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
      }
    )
  }
  createManager() {
    const formData = this.employeeForm.value;
    this.http.postManager(formData).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        this.toaster.title = "Success";
        this.toaster.message = "Account created successfully"
        this.toaster.showToasterx();
        this.employeeForm.reset()
      },error =>{
        console.log(error)
      }
    )
  }
  doCreate() {
    this.router.navigate(["manager-create-employee"])
  }
}
