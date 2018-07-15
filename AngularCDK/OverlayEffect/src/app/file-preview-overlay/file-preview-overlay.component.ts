import { Component, OnInit, Inject } from '@angular/core';
import { FilePreviewOverlayRef } from './file-preview-overlay-ref';
import { FILE_PREVIEW_DIALOG_DATA } from './file-preview-overlay.tokens';

@Component({
  selector: 'app-file-preview-overlay',
  template: `<h1>Hello World!</h1>`,
  styles: [`
    :host {
      display: block;
      background: white;
    }

    h1 {
      margin: 0;
      padding: 1em;
    }
  `]
})
export class FilePreviewOverlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
