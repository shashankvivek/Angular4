import { NgModule } from "@angular/core";
import { ICVComponent } from "./ICV/icv.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ICVComponent],
    imports : [
        CommonModule
    ],
    exports:[ICVComponent]
})

export class CommonSharedModule {}