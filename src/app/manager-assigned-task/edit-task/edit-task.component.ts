import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { WebapiService } from 'src/app/webapi.service';
import { ManagerAssignedTaskComponent } from '../manager-assigned-task.component';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit{
  @Input() showEditTask = false;
  parentData : ManagerAssignedTaskComponent | any;
  public editForm : FormGroup | any;
  public file : any;
  public upcoming_data = new Task

  constructor(private http: WebapiService) {
    this.editForm = new FormGroup({
      id : new FormControl(''),
      task_name : new FormControl('',Validators.required),
      task_brief : new FormControl('',Validators.required),
      date : new FormControl('',Validators.required),
      priority : new FormControl('',Validators.required),
      attach_file : new FormControl('',Validators.required),
    })
  }

  setData(data: any){
    let received_data = JSON.parse(JSON.stringify(data))
    this.editForm.controls.id.setValue(received_data.id)
    this.editForm.controls.task_name.setValue(received_data.task_name)
    this.editForm.controls.task_brief.setValue(received_data.task_brief)
    this.editForm.controls.date.setValue(received_data.date)
    this.editForm.controls.priority.setValue(received_data.priority)
    this.editForm.controls.attach_file.setValue(received_data.attach_file)
  }

  updateTask(){
    let formData = new FormData()
    formData.append("id",this.editForm.value.id)
    formData.append("task_name",this.editForm.value.task_name)
    formData.append("task_brief",this.editForm.value.task_brief)
    formData.append("date",this.editForm.value.date)
    formData.append("priority",this.editForm.value.priority)
    formData.append("attach_file",this.file)
    console.log("from 47 ",this.file);
    // submit the data now, let me have console things
    this.http.updateTask(this.editForm.value).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log("from 50",res)
      }
    )
  }

  ngOnInit(){

  }

  getFile(event: any){
    this.file = event.target.files[0]
  }

}
class Task{
  public task_name : string | undefined;
  public task_brief : string | undefined;
  public date : string | undefined;
  public priority : string | undefined;
  public attach_file : string | undefined;
}
