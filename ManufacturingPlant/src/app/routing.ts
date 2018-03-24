import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome-comp/welcome-comp";
import { ModuleWithProviders } from "@angular/core";



const rootRouter: Routes = [
    {path: '', pathMatch : 'full', redirectTo : 'home'},
    {path: 'home', component : WelcomeComponent}
]

export const AppRootRouting: ModuleWithProviders = RouterModule.forRoot(rootRouter);