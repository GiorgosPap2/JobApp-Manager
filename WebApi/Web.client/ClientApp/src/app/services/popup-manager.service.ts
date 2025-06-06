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

  constructor(private dialog: MatDialog,
              private responsiveService: ResponsiveLayoutService) { }


  public openJobApplicationPopup(): MatDialogRef<JobApplicationComponent | any> | undefined {

     if (this.responsiveService.isMobile() || this.responsiveService.isTablet()) 
        return this.openDialogMobile();
      else
        return this.openDialog();
  }

  private openDialog(): MatDialogRef<JobApplicationComponent | any> | undefined {
    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'full-screen-modal';
    dialogConfig.width = 'auto';
    dialogConfig.height = 'auto';
    dialogConfig.data = {};

    this.dialogRef = this.dialog.open(JobApplicationComponent, dialogConfig);

    return this.dialogRef;
  }

  private openDialogMobile() : MatDialogRef<JobApplicationComponent | any> | undefined{
    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '100%';
    dialogConfig.height = '100%';
    dialogConfig.panelClass = 'full-screen-modal';
    dialogConfig.data = {};

    this.dialogRef = this.dialog.open(JobApplicationComponent, dialogConfig);

    return this.dialogRef;
  }

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