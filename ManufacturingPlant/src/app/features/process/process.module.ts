import { NgModule } from "@angular/core";
import { ProcessComponent } from "./process-comp";
import { CommonModule } from "@angular/common";
import { ProcessRouting } from "./process.routing";
import { ProcessListComponent } from "./list/process.list.component";
import { CommonSharedModule } from "../../common/common.module";

@NgModule({
 declarations: [ProcessComponent, ProcessListComponent],
 imports: [
     CommonModule,
     ProcessRouting,
     CommonSharedModule
 ],
 providers : []
})

export class ProcessModule{}