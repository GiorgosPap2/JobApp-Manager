import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ResponsiveLayoutService } from './reactive-layout.service';
import { JobApplicationComponent } from '../components/job-application/job-application.component';
import { PopupMessageComponent } from '../components/popup-message/popup-message.component';

@Injectable({
  providedIn: 'root'
})
export class PopupManagerService {

  public dialogRef!: MatDialogRef<JobApplicationComponent>;
  public data: any;

  constructor(private dialog: MatDialog,
              private responsiveService: ResponsiveLayoutService) { }

  // Opens the job application popup dialog.
  public openJobApplicationPopup(data?: any): MatDialogRef<JobApplicationComponent | any> | undefined {
    
    this.data = data;

    if (this.responsiveService.isMobile() || this.responsiveService.isTablet())
      return this.openDialogMobile();
    else

    return this.openDialog();
  }

  //Open dialog operation for desktop
  private openDialog(): MatDialogRef<JobApplicationComponent | any> | undefined {
    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'full-screen-modal';
    dialogConfig.width = 'auto';
    dialogConfig.height = 'auto';
    dialogConfig.data = {data: this.data};

    this.dialogRef = this.dialog.open(JobApplicationComponent, dialogConfig);

    return this.dialogRef;
  }

  //Open dialog operation for mobile/tablet
  private openDialogMobile() : MatDialogRef<JobApplicationComponent | any> | undefined{
    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '100%';
    dialogConfig.height = '100%';
    dialogConfig.panelClass = 'full-screen-modal';
    dialogConfig.data = {data: this.data};

    this.dialogRef = this.dialog.open(JobApplicationComponent, dialogConfig);

    return this.dialogRef;
  }

  // Opens a popup message dialog with the provided message.
  public openDialogMessage(message: string): MatDialogRef<PopupMessageComponent | any> | undefined {
    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'full-screen-modal';
    dialogConfig.width = 'auto';
    dialogConfig.height = 'auto';
    dialogConfig.data = {message: message};

    return this.dialog.open(PopupMessageComponent, dialogConfig);
  }
}