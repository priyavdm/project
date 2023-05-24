import { Component } from '@angular/core';
import { studentList } from '../test';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
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
 s = new studentList();

}
