import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListingComponent } from './components/job-listing/job-listing.component';
import { JobApplicationComponent } from './components/job-application/job-application.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupMessageComponent } from './components/popup-message/popup-message.component';
import { MatDialogModule } from '@angular/material/dialog';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationService } from './services/application.service';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    JobListingComponent,
    JobApplicationComponent,
    PopupMessageComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserModule,
  ],
  exports: [
    JobListingComponent
  ],
  providers: [
    ApplicationService,
    provideHttpClient()
  ]
})
export class AppModule { }
