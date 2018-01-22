import { NgModule } from "@angular/core";
import { LazyComponent } from "app/Lazy/components/lazy-component";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { LazyChildComponent } from "app/Lazy/components/lazy-child-component";

const routes : Routes = [
    {path : 'load1' , component : LazyComponent,
        children : [
            {path : 'lazy-child',component: LazyChildComponent }
        ]
    }
];

@NgModule({
    declarations : [LazyComponent,LazyChildComponent],
    imports : [
         RouterModule.forChild(routes)
    ],
    exports : [LazyComponent],
    providers: []
})

export class LazyModule{

}