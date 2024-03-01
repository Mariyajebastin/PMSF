import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  private serverIp = "http://127.0.0.1:8000"

  constructor(private http: HttpClient) {

  }

  postEmployee(data: any) {
      return this.http.post(this.serverIp+"/employee",data)
  }

  doLogin(data: any){
    return this.http.post(this.serverIp+"/login",data)
  }

  postManager(data: any){
    return this.http.post(this.serverIp+"/manager",data)
  }

  postTask(data:any){
    return this.http.post(this.serverIp+"/task",data)
  }
  getTask(){
    return this.http.get(this.serverIp+"/task")
  }

  updateTask(data: any){
    return this.http.put(this.serverIp+"/task",data)
  }
  deleteTask(data: any){
    return this.http.delete(this.serverIp+"/task/"+data)
  }
  postAnnouncement(data: any){
    return this.http.post(this.serverIp+"/announcement",data)
  }

  getAnnouncement(){
    return this.http.get(this.serverIp+"/announcement")
  }
  getEmployee(){
    return this.http.get(this.serverIp+"/employee")
  }
  loginEmployee(data: any){
    return this.http.post(this.serverIp+"/employee/login",data)
  }
}
