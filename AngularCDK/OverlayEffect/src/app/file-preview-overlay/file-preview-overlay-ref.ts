import { OverlayRef } from '@angular/cdk/overlay';
export class FilePreviewOverlayRef {
    constructor(private _overlayRef: OverlayRef) { }

    close(): void {
        this._overlayRef.dispose();
    }
}
