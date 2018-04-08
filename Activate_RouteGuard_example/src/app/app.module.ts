import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { RootRouter } from './app.routing';
import { AdminComponent } from './admin/admin.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { AdminViewComponent } from './admin/admin-view/admin-view.component';
import { AuthGuardSvc } from './guard-svc/auth.guard.svc';
import { UserSvc } from './guard-svc/user.svc';
import { AuthChildrenGuardSvc } from './guard-svc/auth.children.svc';


@NgModule({
  declarations: [AppComponent,
    LoginPanelComponent,
    AdminComponent,
    AdminEditComponent,
    AdminViewComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RootRouter
  ],
  providers: [AuthGuardSvc, UserSvc, AuthChildrenGuardSvc],
  bootstrap: [AppComponent]
})
export class AppModule { }
