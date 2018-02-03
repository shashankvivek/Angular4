import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import { AppComponent } from 'app/app.component';
import { NavBarComponent } from 'app/nav-bar/nav-bar.component';
import { NavSvc } from 'app/nav-bar/nav-svc';
import { HttpClientModule } from '@angular/common/http';
import { MaterialDefinitionComponent } from 'app/features/materialDefinition/mat-def-comp';
import { ProcessComponent } from 'app/features/process/process-comp';
import { MaterialDefModule } from 'app/features/materialDefinition/material-def-module';
import { WelcomeComponent } from 'app/welcome-comp/welcome-comp';

const routes = [
  {path : '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'matdef', loadChildren: './features/materialDefinition/material-def-module#MaterialDefModule'},
  {path: 'index', component: WelcomeComponent}
];

@NgModule({
  declarations: [AppComponent,NavBarComponent,WelcomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({})
    // MaterialDefModule  --> loaded via lazy loading
  ],
  providers: [NavSvc],
  bootstrap: [AppComponent]
})
export class AppModule { }
