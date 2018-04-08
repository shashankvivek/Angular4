import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AlertComponent } from './ViewExample/alert/alert.component';
import { TabsComponent } from './ContentExample/tabs/tabs.component';
import { TabComponent } from './ContentExample/tab/tab.component';


@NgModule({
  declarations: [AppComponent, AlertComponent, TabsComponent, TabComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
