import { Injectable, Injector, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { FilePreviewOverlayComponent } from './file-preview-overlay/file-preview-overlay.component';
import { DEFAULT_CONFIG } from './file-preview-overlay/file-overlay-config';
import { IFilePreviewDialogConfig } from './file-preview-overlay/file-overlay-config';
import { FilePreviewOverlayRef } from './file-preview-overlay/file-preview-overlay-ref';
import { FILE_PREVIEW_DIALOG_DATA } from './file-preview-overlay/file-preview-overlay.tokens';

@Injectable()
export class FilePreviewOverlayService {

  constructor(
    private injector: Injector,
    private overlay: Overlay
  ) { }

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
    const filePreviewPortal = new ComponentPortal(FilePreviewOverlayComponent);
    overlayRef.attach(filePreviewPortal);
    const dialogRef = new FilePreviewOverlayRef(overlayRef);
    // Subscribe to a stream that emits when the backdrop was clicked
    overlayRef.backdropClick().subscribe(_ => {
      dialogRef.close();
    });
    /**
     * From here we could take it one step further and also close the overlay when a user naviagtes back in the browser history.
     *  For our application, however, this doesn’t make much sense because we are not using the router and there’s only one page
     *  that we render out to the screen.
     *  But feel free to give it a shot! Hint: use the Location service and subscribe to the browser’s popState events.
     */
    return dialogRef;
  }

  private attachDialogContainer(overlayRef: OverlayRef, config: IFilePreviewDialogConfig, dialogRef: FilePreviewOverlayRef) {
    const injector = this.createInjector(config, dialogRef);

    const containerPortal = new ComponentPortal(FilePreviewOverlayComponent, null, injector);
    const containerRef: ComponentRef<FilePreviewOverlayComponent> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }


  private createInjector(config: IFilePreviewDialogConfig, dialogRef: FilePreviewOverlayRef): PortalInjector {
    // Instantiate new WeakMap for our custom injection tokens
    const injectionTokens = new WeakMap();

    // Set custom injection tokens
    injectionTokens.set(FilePreviewOverlayRef, dialogRef);
    injectionTokens.set(FILE_PREVIEW_DIALOG_DATA, config.image);

    // Instantiate new PortalInjector
    return new PortalInjector(this.injector, injectionTokens);
  }

}
