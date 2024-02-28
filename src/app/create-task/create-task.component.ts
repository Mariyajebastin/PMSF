import {Component, Input,} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  @Input () taskBriefForm : FormGroup | any;
  
  constructor(private router:Router) {
    this.taskBriefForm = new FormGroup({
      task_brief : new FormControl('',Validators.required),
      }
    )
  }
}
