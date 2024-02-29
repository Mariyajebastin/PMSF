import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { EmployeeTaskCardComponent } from '../employee-task-card/employee-task-card.component';
import { WebapiService } from '../webapi.service';

@Component({
  selector: 'app-employee-task',
  templateUrl: './employee-task.component.html',
  styleUrls: ['./employee-task.component.css']
})
export class EmployeeTaskComponent implements OnInit{
  @ViewChild('taskCard') taskCard: EmployeeTaskCardComponent | any;
  public task_data : any;

  constructor(private http: WebapiService) {
  }


  showTask(){
    this.taskCard.showDialog = true;
  }

  getTask(){
    this.http.getTask().subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log("from 24",res)
        this.task_data = res.message;
        console.log("from 26",this.task_data)
      }
    )
  }
  ngOnInit(){
    this.getTask()
  }
}
