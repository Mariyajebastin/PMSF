import {Component, Input, ViewChild,} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { ToasterComponent } from '../toaster/toaster.component';
import { WebapiService } from '../webapi.service';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
 public createTaskfForm : FormGroup | any;
 public file : any;
  @ViewChild('toaster') toaster : ToasterComponent | any

  constructor(private router:Router, private http: WebapiService) {
    this.createTaskfForm = new FormGroup({
      task_brief : new FormControl('',Validators.required),
      date : new FormControl('',Validators.required),
      priority : new FormControl('',Validators.required),
      attach_file : new FormControl('',Validators.required),
      }
    )
  }

  doCreate() {
    const formData = this.createTaskfForm.value;
    this.http.postTask(formData).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        this.toaster.title = "Success";
        this.toaster.message = "Task created successfully";
        this.toaster.showToasterx();
        this.createTaskfForm.reset();
      },error =>{
        console.log(error)
      }
    )
  }


  getFile(event: any){
    this.file = event.target.files[0];
  }
}
