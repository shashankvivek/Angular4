import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { AppDelayDirective } from './delayRenderer/app-delay.directive';


@NgModule({
  declarations: [AppComponent, HighlightDirective, AppDelayDirective ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
