import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { FilePreviewOverlayComponent } from './file-preview-overlay/file-preview-overlay.component';
import { DEFAULT_CONFIG } from './file-preview-overlay/file-overlay-config';
import { IFilePreviewDialogConfig } from './file-preview-overlay/file-overlay-config';
import { FilePreviewOverlayRef } from './file-preview-overlay/file-preview-overlay-ref';

@Injectable()
export class FilePreviewOverlayService {

  constructor(private overlay: Overlay) { }

  private getOverlayConfig(config: IFilePreviewDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfigObj = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      // Other strategies are .noop(), .reposition(), or .close()
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfigObj;
  }

  private createOverlay(config: IFilePreviewDialogConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  open(config: IFilePreviewDialogConfig = {}) {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };
    const overlayRef = this.createOverlay(dialogConfig);
    const dialogRef = new FilePreviewOverlayRef(overlayRef);
    const filePreviewPortal = new ComponentPortal(FilePreviewOverlayComponent);
    overlayRef.attach(filePreviewPortal);
    return dialogRef;
  }

}
