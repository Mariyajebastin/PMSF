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
  @ViewChild('toaster') toaster : ToasterComponent | any;
  public profileImage : any;
  constructor(private router:Router,private http: WebapiService) {
    this.employeeForm = new FormGroup({
      employee_name : new FormControl('',Validators.required),
      designation : new FormControl('',Validators.required),
      email_id : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required),
      profile_picture : new FormControl('',Validators.required),
      }
    )
  }
  createManager() {
    if (this.employeeForm.valid){
      const formData = new FormData();
      formData.append("employee_name",this.employeeForm.value.employee_name);
      formData.append("designation",this.employeeForm.value.designation);
      formData.append("email_id",this.employeeForm.value.email_id);
      formData.append("password",this.employeeForm.value.password);
      formData.append("profile_picture",this.profileImage);
      this.http.postManager(formData).subscribe(
        response =>{
          let res = JSON.parse(JSON.stringify(response));
          console.log("from 29",res)
          if (res.status){
            this.toaster.title = "Success";
            this.toaster.message = "Account created successfully"
            this.toaster.showToasterx();
            this.employeeForm.reset()
          }
        },error =>{
          console.log(error)
        }
      )
    }else {
      this.employeeForm.markAllAsTouched()
    }

  }
  doCreate() {
    this.router.navigate(["manager-create-employee"])
  }

  getImage(event: any) {
   this.profileImage = event.target.files[0];
  }
}
