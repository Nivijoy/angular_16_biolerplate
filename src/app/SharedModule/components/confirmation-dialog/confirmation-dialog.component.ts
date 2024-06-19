import { Component, OnInit, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { ConfirmDialogData } from 'src/app/interface';

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) {}
    ngOnInit(): void {}
}
