import { Component, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { ToasterComponent } from '../toaster/toaster.component';
import { WebapiService } from '../webapi.service';

@Component({
  selector: 'app-manager-new-announcement',
  templateUrl: './manager-new-announcement.component.html',
  styleUrls: ['./manager-new-announcement.component.css']
})
export class ManagerNewAnnouncementComponent {
  public announceForm : FormGroup | any;
  @ViewChild('toaster') toaster : ToasterComponent | any
  constructor(private http: WebapiService) {
    this.announceForm = new FormGroup({
      announcement : new  FormControl('',Validators.required),
      name : new  FormControl('',Validators.required),
      date : new  FormControl('',Validators.required)
    })
  }

  doPublish() {
    let formData = this.announceForm.value;
    this.http.postAnnouncement(formData).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        this.toaster.title = "Success";
        this.toaster.message = "Announcement created successfully";
        this.toaster.showToasterx();
        this.announceForm.reset()
      },error =>{
        console.log(error)
      }
    )
  }
}
