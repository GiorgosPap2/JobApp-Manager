import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListingComponent } from './components/job-listing/job-listing.component';
import { JobApplicationComponent } from './components/job-application/job-application.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupMessageComponent } from './components/popup-message/popup-message.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationService } from './services/application.service';

@NgModule({
  bootstrap: [JobListingComponent],
  declarations: [
    JobListingComponent,
    JobApplicationComponent,
    PopupMessageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    JobListingComponent
  ],
  providers: [
    ApplicationService,
  ]
})
export class AppModule { }
