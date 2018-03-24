import { Routes, RouterModule } from "@angular/router";
import { ProcessComponent } from "./process-comp";
import { ModuleWithProviders } from "@angular/core";
import { ProcessListComponent } from "./list/process.list.component";
import { ProcessAddComponent } from "./add/process.add.component";

export const routes: Routes = [
    {path: '', component : ProcessComponent,
        children: [
            {path : '', component : ProcessListComponent},
            {path: 'add', component : ProcessAddComponent}
        ]
    }
];
export const ProcessRouting: ModuleWithProviders = RouterModule.forChild(routes);
