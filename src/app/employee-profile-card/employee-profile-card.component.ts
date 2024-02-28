import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-profile-card',
  templateUrl: './employee-profile-card.component.html',
  styleUrls: ['./employee-profile-card.component.css']
})
export class EmployeeProfileCardComponent {
  @Input () value : any
}
