import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';

// Top-level app component constructs.
import { AppComponent } from './component';
import { StoreModule } from '@ngrx/store';
import { AddEmpComponent } from 'app/add-emp/add-emp-comp';
import { ViewEmpComponent } from 'app/view-emp/view-emp-comp';
import { EmployeeService } from 'app/emp.svc';
import { EmployeeReducer } from 'app/reducer/emp.reducers';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from 'app/effects/emp.effects';

const route : Routes = [
  {path : 'add' , component : AddEmpComponent},
  {path : 'view', component : ViewEmpComponent}
];

@NgModule({
  declarations: [AppComponent,ViewEmpComponent,AddEmpComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route),
    EffectsModule.forRoot([EmployeeEffects]),
    StoreModule.forRoot({ post : EmployeeReducer })
  ],
  providers : [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
