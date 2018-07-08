interface IFilePreviewDialogConfig {
    panelClass?: string;
    hasBackdrop?: boolean;
    backdropClass?: string;
}

const DEFAULT_CONFIG: IFilePreviewDialogConfig = {
    hasBackdrop: true,
    backdropClass: 'dark-backdrop',
    panelClass: 'tm-file-preview-dialog-panel'
};

