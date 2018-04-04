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
import { LoginComponent } from './auth/login.component';
import { AuthGuardSvc } from './auth/AuthGuard.svc';
import { LoginSvc } from './auth/login.svc';
import { HomeComponent } from './home/home.component';
import { CommonSharedModule } from './common/common.module';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, LoginComponent,NavBarComponent, HomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRootRouting
  ],
  providers: [FeatureListSvc, LoginSvc, AuthGuardSvc],
  bootstrap: [AppComponent]
})
export class AppModule { }
