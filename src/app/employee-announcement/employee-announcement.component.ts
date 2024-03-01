import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../webapi.service';

@Component({
  selector: 'app-employee-announcement',
  templateUrl: './employee-announcement.component.html',
  styleUrls: ['./employee-announcement.component.css']
})
export class EmployeeAnnouncementComponent implements OnInit{
  public announce_data : any;


  constructor(private http: WebapiService) {
  }
  getAnnouncement(){
    this.http.getAnnouncement().subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        this.announce_data = res.message;
      }
    )
  }

  ngOnInit(){
    this.getAnnouncement();
  }
}
