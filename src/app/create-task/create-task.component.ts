import {Component, Input, OnInit, ViewChild,} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { ToasterComponent } from '../toaster/toaster.component';
import { WebapiService } from '../webapi.service';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit{
 public createTaskfForm : FormGroup | any;
 public file : any;
  @ViewChild('toaster') toaster : ToasterComponent | any

  constructor(private router:Router, private http: WebapiService) {
    this.createTaskfForm = new FormGroup({
      id : new FormControl(''),
      task_name : new FormControl('',Validators.required),
      task_brief : new FormControl('',Validators.required),
      date : new FormControl('',Validators.required),
      priority : new FormControl('',Validators.required),
      attach_file : new FormControl('',Validators.required),
      }
    )
  }

  doCreate() {
    const formData = new FormData();
    formData.append("task_name",this.createTaskfForm.value.task_name)
    formData.append("task_brief",this.createTaskfForm.value.task_brief)
    formData.append("date",this.createTaskfForm.value.date);
    formData.append("priority",this.createTaskfForm.value.priority);
    formData.append("attach_file",this.file)
    this.http.postTask(formData).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log("from 35",res)
        this.toaster.title = "Success";
        this.toaster.message = "Task created successfully";
        // this.toaster.showToasterx();
        this.createTaskfForm.reset();
      },error =>{
        console.log(error)
      }
    )
  }

  ngOnInit(){
    
  }

  getFile(event: any){
    this.file = event.target.files[0];
  }
}
