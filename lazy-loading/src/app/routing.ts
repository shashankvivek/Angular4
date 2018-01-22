import { Routes,RouterModule } from "@angular/router";
import { EagerComponent } from "app/EagerComponent/eager-component";
import { ModuleWithProviders } from "@angular/core";


const rootRouter : Routes = [
    {path : '' , redirectTo : 'eager' , pathMatch : 'full'},
    {path : 'eager' , component : EagerComponent},
    {path : 'lazy' , loadChildren : './Lazy/lazy.module#LazyModule'}
  ];

export const ApplicationRouting : ModuleWithProviders = RouterModule.forRoot(rootRouter)