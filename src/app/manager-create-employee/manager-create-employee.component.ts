import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {WebapiService} from "../webapi.service";
@Component({
  selector: 'app-manager-create-employee',
  templateUrl: './manager-create-employee.component.html',
  styleUrls: ['./manager-create-employee.component.css']
})
export class ManagerCreateEmployeeComponent {
  public createForm : FormGroup | any;
  constructor(private router:Router,private http:WebapiService) {
    this.createForm = new FormGroup( {
      employee_name : new FormControl('',Validators.required),
      designation : new FormControl('',Validators.required),
      email_id : new FormControl('',Validators.required),
      dob :new  FormControl('',Validators.required),
      doj :new FormControl('',Validators.required)
      }
    )
  }

  doSave() {
    if(this.createForm.valid){
      this.http.doSave(this.createForm.value).subscribe(
        
      )
    }
    this.router.navigate([""])
  }
}
