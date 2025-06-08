import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  public applied: boolean = false;
  private applicationId: string = '';

  constructor(private popupManger: PopupManagerService,
              private applicationService: ApplicationService,
              private changeDetector: ChangeDetectorRef)
  { }

  ngOnInit() {}

  // This method is called when the user clicks the "Apply" button
  // It opens a dialog for the job application form
  // If the dialog is closed with a result (id), it sets the applied flag to true and stores the application ID
  public apply(): void {
    let popupDialogRef = this.popupManger.openJobApplicationPopup();

    if (!popupDialogRef) {
      console.error('Dialog reference is undefined. Popup may not have opened correctly.');
      return;
    }

    popupDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.applied = true;
        this.applicationId = result;
        this.changeDetector.detectChanges();
      } else {
        console.log('Dialog was dismissed without a result');
        this.applied = false;
        this.changeDetector.detectChanges();
      }
    });
  }

  // This method retrieves the job application by its ID when the user clicks the "Show Application" button
  public getApplication(): void {
    this.applicationService.getApplicationById(this.applicationId)
      .then(response => {
        this.popupManger.openJobApplicationPopup(response);
      })
      .catch(error => {
        console.error('Error fetching application:', error);
      });
  } 

}
