import { Component } from '@angular/core';
import { FilePreviewOverlayService } from './file-preview-overlay/file-preview-overlay.service';
import { FilePreviewOverlayRef } from './file-preview-overlay/file-preview-overlay-ref';
import { STATIC_FILE_DATE } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  files = STATIC_FILE_DATE;

  constructor(private _filePreviewSvc: FilePreviewOverlayService) { }

  showPreview(file) {
    const dialogRef: FilePreviewOverlayRef = this._filePreviewSvc.open(
      {
        image: file
      }
    );
  }
}
