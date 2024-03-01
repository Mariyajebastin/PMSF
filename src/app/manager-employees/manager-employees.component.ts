import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../webapi.service';

@Component({
  selector: 'app-manager-employees',
  templateUrl: './manager-employees.component.html',
  styleUrls: ['./manager-employees.component.css']
})
export class ManagerEmployeesComponent implements OnInit{
  public employee_data : any;

  constructor(private http: WebapiService) {
  }

  ngOnInit(): void {
    this.getEmployeeDetails()
  }
  getEmployeeDetails(){
    this.http.getEmployee().subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log("from 22",res)
        this.employee_data = res.message;
        console.log("from 24",this.employee_data)
      }
    )
  }

  getURL(source: any){
    // @ts-ignore
    return this.http.serverIp+source
  }

}
