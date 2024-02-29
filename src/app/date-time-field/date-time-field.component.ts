import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-date-time-field',
  templateUrl: './date-time-field.component.html',
  styleUrls: ['./date-time-field.component.css']
})
export class DateTimeFieldComponent implements OnInit{
  currentDate : any;
  currentTime : any;

  constructor( private datePipe: DatePipe) {
    
  }

  ngOnInit() {
    this.updateDateTime();
    setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  updateDateTime() {
    const now = new Date();
    this.currentDate = this.datePipe.transform(now, 'dd MMMM yyyy');
    this.currentTime = this.datePipe.transform(now, 'hh:mm a');
  }

}
