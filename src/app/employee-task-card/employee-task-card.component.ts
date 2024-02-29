import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-task-card',
  templateUrl: './employee-task-card.component.html',
  styleUrls: ['./employee-task-card.component.css']
})
export class EmployeeTaskCardComponent {
    @Input() showDialog = false;
    
}
