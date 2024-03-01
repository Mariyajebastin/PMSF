import { Component, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { ToasterComponent } from '../toaster/toaster.component';
import {WebapiService} from "../webapi.service";
@Component({
  selector: 'app-manager-create-employee',
  templateUrl: './manager-create-employee.component.html',
  styleUrls: ['./manager-create-employee.component.css']
})
export class ManagerCreateEmployeeComponent {
  public createForm : FormGroup | any;
  @ViewChild('toaster') toaster : ToasterComponent | any;
  public profileImage : any;
  constructor(private router:Router,private http:WebapiService) {
    this.createForm = new FormGroup( {
      employee_name : new FormControl('',Validators.required),
      designation : new FormControl('',Validators.required),
      email_id : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required),
      dob :new  FormControl('',Validators.required),
      doj :new FormControl('',Validators.required),
      profile_picture :new FormControl('',Validators.required)
      }
    )
  }

  doSave() {
    const formData = new FormData();
    formData.append("employee_name",this.createForm.value.employee_name)
    formData.append("designation",this.createForm.value.designation)
    formData.append("email_id",this.createForm.value.email_id)
    formData.append("password",this.createForm.value.password)
    formData.append("dob",this.createForm.value.dob)
    formData.append("doj",this.createForm.value.doj)
    formData.append("profile_picture",this.profileImage)
    this.http.postEmployee(formData).subscribe(
       response =>{
         let res = JSON.parse(JSON.stringify(response))
         this.toaster.title = "Success"
         this.toaster.message = "Account Created Successfully"
         this.toaster.showToasterx();
         this.createForm.reset();
       }
    )
  }

  getImage(event: any) {
    this.profileImage = event.target.files[0]
  }
}
