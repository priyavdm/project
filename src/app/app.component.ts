import { Component, ViewChild, AfterViewInit} from '@angular/core';
import { MyappComponent } from './myapp/myapp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
// throw new Error('Method not implemented.');
    this.message=this.child.title;
  }
  title = 'finstein';
  title1='Tcs';
  title2=[
    {name:'finstein',role:'Developer'},{name:'infosys',role:'testing'}
  ];
  title3=['priya','rajiv','rajesh','haridha','divya'];

  message='';
  var1='';
  

  @ViewChild (MyappComponent) child:any;
  

  captureChild(event:string){
    // console.log('abcdefgh',event);
    this.var1=event;
    }

  capture(event:string){
    // console.log('priyadharshini',event);
    console.log(event);
     }

  capChild(event:string){
    console.log(event);
     }
}
