import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-message',
  standalone: false,
  templateUrl: './popup-message.component.html',
  styleUrl: './popup-message.component.scss'
})
export class PopupMessageComponent {

  public message: string = '';
  dialogRef: MatDialogRef<PopupMessageComponent> | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,) {
    this.message = data.message;
  }

  public isSuccess(): boolean {
    return this.data.message.includes('successfully');
  }

  public isFailed(): boolean {
    return this.data.message.includes('error');
  }

  public dismiss(): void {
    return this.dialogRef?.close();
  }
}
