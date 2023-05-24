import { Component } from '@angular/core';
import { studentList } from '../test';

@Component({
  selector: 'app-learnservice',
  templateUrl: './learnservice.component.html',
  styleUrls: ['./learnservice.component.scss']
})
export class LearnserviceComponent {
//   studentList:any[]=[{
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
s=new studentList();

}
