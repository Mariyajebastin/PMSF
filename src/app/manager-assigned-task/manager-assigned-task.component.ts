import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { WebapiService } from '../webapi.service';

@Component({
  selector: 'app-manager-assigned-task',
  templateUrl: './manager-assigned-task.component.html',
  styleUrls: ['./manager-assigned-task.component.css']
})
export class ManagerAssignedTaskComponent implements OnInit{
  public task_data : any;
  showTasks = true;
  @Input() showDropdown = false;
  @ViewChild('editTask') editTask : any;

  constructor(private http: WebapiService) {

  }

  getTaskDetails(){
    this.http.getTask().subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        this.task_data = res.message;
      }
    )
  }

  doEdit(task: any){
    this.editTask.showEditTask = true;
    this.showTasks = false;
    this.editTask.parentData = this;
    this.editTask.setData(task)
  }

  deleteTask(task : any){
    let task_d = JSON.parse(JSON.stringify(task))
    this.http.deleteTask(task_d.id).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
      }
    )
  }

  ngOnInit(){
    this.getTaskDetails()
  }

  openDropdown() {
    if(this.showDropdown){
      this.showDropdown = false;
    }
    else {
      this.showDropdown = true;
    }
  }
}
