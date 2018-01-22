import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Routes , RouterModule} from '@angular/router';
import { EagerComponent } from 'app/EagerComponent/eager-component';
import { LazyModule } from 'app/Lazy/lazy.module';
import { ApplicationRouting } from 'app/routing';


@NgModule({
  declarations: [
    AppComponent,
    EagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //LazyModule, // uncommenting it will load it during bootstrap
    ApplicationRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
