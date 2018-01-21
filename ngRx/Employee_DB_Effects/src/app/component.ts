import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'zoo-root',
  templateUrl: './component.html',
})
export class AppComponent {
  title = 'Welcome to the Redux example';
  
}
