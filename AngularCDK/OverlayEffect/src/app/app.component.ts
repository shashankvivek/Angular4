import { Component } from '@angular/core';
import { FilePreviewOverlayService } from './file-preview-overlay.service';
import { FilePreviewOverlayRef } from './file-preview-overlay/file-preview-overlay-ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  files = [
    { name: 'image_1.jpg', path: '' },
    { name: 'image_2.jpg', path: '' },
    { name: 'image_3.jpg', path: '' },
    { name: 'image_4.jpg', path: '' },
    { name: 'image_5.jpg', path: '' }
  ];

  constructor(private _filePreviewSvc: FilePreviewOverlayService) { }

  showPreview() {
    const dialogRef: FilePreviewOverlayRef = this._filePreviewSvc.open();

    setTimeout(() => {
      dialogRef.close();
    }, 2000)
  }
}
