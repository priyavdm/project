import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }
  getstudentList(){
    return [{
      name:'priyu',
      age:22,
      gender:'female'
    },
    {
      name:'sonia',
      age:22,
      gender:'female'
    },
    {
      name:'aji',
      age:22,
      gender:'female'
    }
  ]
  }
}
