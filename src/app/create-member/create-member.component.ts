import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent {
  public employeeForm : FormGroup | any;
  constructor(private router:Router) {
    this.employeeForm = new FormGroup({
      employee_name : new FormControl('',Validators.required),
      designation : new FormControl('',Validators.required),
      email_id : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
      }
    )
  }
  doSave() {
    if(this.employeeForm.valid){
      
    }
  }
  doCreate() {
    this.router.navigate(["manager-create-employee"])
  }
}
