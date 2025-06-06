import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { PopupManagerService } from '../../services/popup-manager.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { JobApplicationComponent } from '../job-application/job-application.component';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-job-listing',
  standalone: false,
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.scss'
})
export class JobListingComponent implements OnInit {

  dialogRef: MatDialogRef<JobApplicationComponent | any> | undefined;
  applied: boolean = false;
  applicationId: string = '';

  constructor(private breakpointObserver: BreakpointObserver,
              private popupManger: PopupManagerService,
              private applicationService: ApplicationService
) { }

  ngOnInit() {}

  public apply(): void {
    this.dialogRef = this.popupManger.openJobApplicationPopup();

    if (!this.dialogRef) {
      console.error('Dialog reference is undefined. Popup may not have opened correctly.');
      return;
    }
    
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.applied = true;
        this.applicationId = result;
      } else {
        console.log('Dialog was dismissed without a result');
        this.applied = false;
      }
    });
  }

  public getApplication(): void {
    this.applicationService.getApplicationById(this.applicationId)
      .then(response => {

      })
      .catch(error => {
        console.error('Error fetching application:', error);
      });
  } 

}
