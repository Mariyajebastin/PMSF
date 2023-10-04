import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-projectstatus-card',
  templateUrl: './projectstatus-card.component.html',
  styleUrls: ['./projectstatus-card.component.css']
})
export class ProjectstatusCardComponent {
  @Input () project_name : any

}
