import { Component } from "@angular/core";

@Component({
    selector: 'lazy',
    template : `
                <h4>Lazy Component from another lazy module</h4>
                <a [routerLink]="['./lazy-child']"> Load Lazy child </a>
                <p> OR
                <button [routerLink]="['/eager']"> Eager Component</button>
                <router-outlet></router-outlet>
                `,    
})

export class LazyComponent{

}