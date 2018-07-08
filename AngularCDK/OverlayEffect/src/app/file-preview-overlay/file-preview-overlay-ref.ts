import { OverlayRef } from '@angular/cdk/overlay';
export class FilePreviewOverlayRef {
    constructor(private _overlayRef: OverlayRef) { }

    close(): void {
        /**
         * Instead of implementing a class that represents a reference to the open overlay, we could have returned the OverlayRef directly
         * However, it’s not a good idea to expose lower-level APIs because users could mess with the overlay and 
         * detach the backdrop for instance
         */
        this._overlayRef.dispose();
    }
}
