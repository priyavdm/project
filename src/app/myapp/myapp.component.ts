import { Component,OnInit,OnChanges, SimpleChanges,AfterViewInit,AfterContentChecked,AfterContentInit,AfterViewChecked,OnDestroy,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.scss']
})
export class MyappComponent implements OnInit,OnChanges,AfterViewInit,AfterContentChecked,AfterContentInit,AfterViewChecked,OnDestroy{

   title:string='angularproject';
   heading=['priya at full stack dev','rajiv java dev'];
   topic=[{name:'leela',gender:'female'},{name:'rajesh',gender:'male'}]
   isDisabled:boolean=true;
   show:boolean=false;
   twoWay='two';
   @Input() public property:any;
   @Input() public project:any;
   @Input() public work:any;
   @Input() public job:any;

   @Output() public check=new EventEmitter();
   @Output() public click=new EventEmitter();
   @Output() public touch=new EventEmitter();


   array=[
    {name:'ajisha',
    age:22,
    gender:'female'
  },
  {
    name:'rajiv',
    age:25,
    gender:'male'
  }
  ];

  constructor(){
      console.log('inside constructor');
      
  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    console.log('inside destroy');
    
  }
  ngAfterViewChecked(): void {
    // throw new Error('Method not implemented.');
    console.log('view checked');
    
  }
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
    console.log('contentInit');
    
  }
  ngAfterContentChecked(): void {
    // throw new Error('Method not implemented.');
    console.log('contentchecked');
    
  }
  ngAfterViewInit(): void {
    // throw new Error('inside view');
    console.log('inside view');
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('inside onchanges');
    console.log('inside onchanges');
    
  }
  ngOnInit(): void {
    // throw new Error('inside oninit');
    console.log('inside oninit');
    
  }


  Ontouch(){
    this.check.emit('active')
  }
  onTouch1(){
    this.click.emit(this.heading);
  }
  onClick1(){
    this.touch.emit(this.topic);
  }

   onClick(e:any){
    this.title='firstproject'
    this.isDisabled=!this.isDisabled;
    this.array.push({name:'nandhu',age:22,gender:'female'},{name:'priya',age:22,gender:'male'});
    console.log(e);
    
   }
   tempRef(value:string){
    console.log(value);
    
   }
  }
