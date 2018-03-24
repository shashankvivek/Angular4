import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {StoreModule} from '@ngrx/store';
import { AppComponent } from 'app/app.component';
import { NavBarComponent } from 'app/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialDefinitionComponent } from 'app/features/materialDefinition/mat-def-comp';
import { ProcessComponent } from 'app/features/process/process-comp';
import { MaterialDefModule } from 'app/features/materialDefinition/material-def-module';
import { WelcomeComponent } from 'app/welcome-comp/welcome-comp';
import { AppRootRouting } from './routing';
import { FeatureListSvc } from './welcome-comp/featureList-svc';

// const routes = [
//   {path : '', redirectTo: 'index', pathMatch: 'full'},
//   {path: 'matdef', loadChildren: './features/materialDefinition/material-def-module#MaterialDefModule'},
//   {path: 'index', component: WelcomeComponent}
// ];

@NgModule({
  declarations: [AppComponent,NavBarComponent,WelcomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRootRouting,
    StoreModule.forRoot({})
  ],
  providers: [FeatureListSvc],
  bootstrap: [AppComponent]
})
export class AppModule { }
