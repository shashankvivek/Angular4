import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome-comp/welcome-comp";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "./auth/login.component";
import { AuthGuardSvc } from "./auth/AuthGuard.svc";



const rootRouter: Routes = [
    {path: '', pathMatch : 'full', redirectTo : 'login'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component : WelcomeComponent, canActivate : [AuthGuardSvc]}
]

export const AppRootRouting: ModuleWithProviders = RouterModule.forRoot(rootRouter);