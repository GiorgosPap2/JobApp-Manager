import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { PopupManagerService } from '../../services/popup-manager.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { JobApplicationComponent } from '../job-application/job-application.component';

@Component({
  selector: 'app-job-listing',
  standalone: false,
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.scss'
})
export class JobListingComponent implements OnInit {

  dialogRef: MatDialogRef<JobApplicationComponent | any> | undefined;
  applied: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver,
              private popupManger: PopupManagerService
) { }

  ngOnInit() {}

  apply() {
    this.dialogRef = this.popupManger.openJobApplicationPopup();

    if (!this.dialogRef) {
      console.error('Dialog reference is undefined. Popup may not have opened correctly.');
      return;
    }
    
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.applied = true;
      } else {
        console.log('Dialog was dismissed without a result');
      }
    });
  }

}
