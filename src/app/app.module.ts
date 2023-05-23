import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyappComponent } from './myapp/myapp.component';
import {FormsModule} from '@angular/forms';
import { TestlifecycleComponent } from './testlifecycle/testlifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    MyappComponent,
    TestlifecycleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
