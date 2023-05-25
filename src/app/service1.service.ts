import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  url='http://localhost:4200/assets/studentlist.json'
  
  
  constructor(private http:HttpClient) { }
  getstudentList(){
     return this.http.get(this.url);
  }
}
