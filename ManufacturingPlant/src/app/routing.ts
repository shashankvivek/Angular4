import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome-comp/welcome-comp";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "./auth/login.component";
import { AuthGuardSvc } from "./auth/AuthGuard.svc";
import { HomeComponent } from "./home/home.component";



const rootRouter: Routes = [
    {path: '', pathMatch : 'full', redirectTo : 'login'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component : HomeComponent, canActivate : [AuthGuardSvc],
        children: [
            {path: '', component : WelcomeComponent},
            {path: 'proc' , loadChildren: './features/process/process.module#ProcessModule'}
        ]
    }
];

export const AppRootRouting: ModuleWithProviders = RouterModule.forRoot(rootRouter);