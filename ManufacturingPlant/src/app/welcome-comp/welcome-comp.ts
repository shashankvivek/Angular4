import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
    selector : 'welcome',
    template : '<h1> Welcome To TraceIT App</h1>'
})

export class WelcomeComponent implements OnInit{
    ngOnInit(){
        // alert('lp')
    }
}