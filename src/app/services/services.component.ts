import { Component, OnInit,} from '@angular/core';
import { studentList } from '../test';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit{
//   student:any[]=[{
//     name:'priyu',
//     age:22,
//     gender:'female'
//   },
//   {
//     name:'sonia',
//     age:22,
//     gender:'female'
//   },
//   {
//     name:'aji',
//     age:22,
//     gender:'female'
//   }
// ]
//  s = new studentList();
studentList:any;
constructor(public s:Service1Service){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.studentList=this.s.getstudentList();
  }

}
