import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { FilePreviewOverlayComponent } from './file-preview-overlay/file-preview-overlay.component';

@Injectable()
export class FilePreviewOverlayService {

  constructor(private overlay: Overlay) { }

  private getOverlayConfig(config: IFilePreviewDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfigObj = new OverlayConfig({
      hasBackdrop : config.hasBackdrop,
      backdropClass : config.backdropClass,
      panelClass : config.panelClasss
    });

    return overlayConfigObj;
  }

  open() {
    const overlayRef = this.overlay.create();
    const filePreviewPortal = new ComponentPortal(FilePreviewOverlayComponent);
    overlayRef.attach(filePreviewPortal);
  }

}
