import { Component,OnInit,OnChanges, SimpleChanges,AfterViewInit,AfterContentChecked,AfterContentInit,AfterViewChecked,OnDestroy,DoCheck} from '@angular/core';


@Component({
  selector: 'app-testlifecycle',
  templateUrl: './testlifecycle.component.html',
  styleUrls: ['./testlifecycle.component.scss']
})
export class TestlifecycleComponent implements OnInit,OnChanges,AfterViewInit,AfterContentChecked,AfterContentInit,AfterViewChecked,OnDestroy,DoCheck{
  constructor(){
    console.log('inside constructor');
    
}
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    console.log('Docheck');
    
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

}
