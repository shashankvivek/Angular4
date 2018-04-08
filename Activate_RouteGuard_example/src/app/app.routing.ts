import { LoginPanelComponent } from "./login-panel/login-panel.component";
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardSvc } from "./guard-svc/auth.guard.svc";
import { AuthChildrenGuardSvc } from "./guard-svc/auth.children.svc";
import { AdminComponent } from "./admin/admin.component";
import { AdminViewComponent } from "./admin/admin-view/admin-view.component";
import { AdminEditComponent } from "./admin/admin-edit/admin-edit.component";

const route: Routes = [
    { path: '', component: LoginPanelComponent },
    {
        path: 'admin1', component: AdminComponent, canActivate: [AuthGuardSvc],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'view' },
            { path: 'view', component: AdminViewComponent },
            { path: 'edit', component: AdminEditComponent }
        ]
    },
    {
        path: 'admin2', component: AdminComponent, canActivateChild: [AuthChildrenGuardSvc],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'view' },
            { path: 'view', component: AdminViewComponent },
            { path: 'edit', component: AdminEditComponent }
        ]
    }
];

export const RootRouter: ModuleWithProviders = RouterModule.forRoot(route);