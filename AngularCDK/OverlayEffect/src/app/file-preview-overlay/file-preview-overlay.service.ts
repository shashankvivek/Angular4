import { Injectable, Injector, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { FilePreviewOverlayComponent } from './file-preview-overlay.component';
import { DEFAULT_CONFIG } from './file-overlay-config';
import { IFilePreviewDialogConfig } from './file-overlay-config';
import { FilePreviewOverlayRef } from './file-preview-overlay-ref';
import { FILE_PREVIEW_DIALOG_DATA } from './file-preview-overlay.tokens';

@Injectable()
export class FilePreviewOverlayService {

  constructor(
    private injector: Injector,
    private overlay: Overlay
  ) { }

  open(config: IFilePreviewDialogConfig = {}) {
    // Override default configuration
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.createOverlay(dialogConfig);

    // Instantiate remote control
    const dialogRef = new FilePreviewOverlayRef(overlayRef);

    const overlayComponent = this.attachDialogContainer(overlayRef, dialogConfig, dialogRef);

    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    return dialogRef;
  }

  private createOverlay(config: IFilePreviewDialogConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private attachDialogContainer(overlayRef: OverlayRef, config: IFilePreviewDialogConfig, dialogRef: FilePreviewOverlayRef) {
    const injector = this.createInjector(config, dialogRef);

    const containerPortal = new ComponentPortal(FilePreviewOverlayComponent, null, injector);
    const containerRef: ComponentRef<FilePreviewOverlayComponent> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }

  private createInjector(config: IFilePreviewDialogConfig, dialogRef: FilePreviewOverlayRef): PortalInjector {
    const injectionTokens = new WeakMap();

    injectionTokens.set(FilePreviewOverlayRef, dialogRef);
    injectionTokens.set(FILE_PREVIEW_DIALOG_DATA, config.image);

    return new PortalInjector(this.injector, injectionTokens);
  }

  private getOverlayConfig(config: IFilePreviewDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }

}
