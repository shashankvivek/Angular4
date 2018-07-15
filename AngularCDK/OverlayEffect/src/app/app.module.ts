import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatListModule, MatIconModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FilePreviewOverlayComponent } from './file-preview-overlay/file-preview-overlay.component';
import { CommonModule } from '@angular/common';
import { FilePreviewOverlayService } from './file-preview-overlay/file-preview-overlay.service';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    AppComponent,
    FilePreviewOverlayComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    OverlayModule
  ],
  providers: [FilePreviewOverlayService],
  bootstrap: [AppComponent],
  entryComponents : [FilePreviewOverlayComponent]
})
export class AppModule { }
