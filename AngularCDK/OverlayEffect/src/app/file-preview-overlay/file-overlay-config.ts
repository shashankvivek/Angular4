export interface IFilePreviewDialogConfig {
    panelClass?: string;
    hasBackdrop?: boolean;
    backdropClass?: string;
    image?: IImage;
}

export interface IImage {
    name: string;
    url: string;
}

export const DEFAULT_CONFIG: IFilePreviewDialogConfig = {
    hasBackdrop: true,
    backdropClass: 'dark-backdrop',
    panelClass: 'tm-file-preview-dialog-panel'
};

