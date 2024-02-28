import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {
  private root = ""
  doSave(data: any) {
      return this.http.post(this.root+"",data)
  }
  constructor(private http:HttpClient) { }
}
