import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { applicationCreateModel } from '../../models/ApplicationCreateModel';
import { ApplicationService } from '../../services/application.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PopupManagerService } from '../../services/popup-manager.service';

@Component({
  selector: 'app-job-application',
  standalone: false,
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.scss'
})
export class JobApplicationComponent implements OnInit{

  public applicationForm!: FormGroup;
  private createModel!: applicationCreateModel;
  public values: any;
  public disabled: boolean = false;
  
  constructor(private fb: FormBuilder,
              private applicationService: ApplicationService,
              private popupService: PopupManagerService,
              private dialog: MatDialogRef<JobApplicationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit(): void {
    this.values = this.data?.data;
    this.applicationForm = this.fb.group(
      {
        name: [this.values?.Name ?  this.values.Name : '', [Validators.required, Validators.minLength(2)]],
        surname: [this.values?.Surname ?  this.values.Surname : '', [Validators.required, Validators.minLength(2)]],
        email: [this.values?.Email ?  this.values.Email : '', [Validators.required, Validators.email]],
        comments: [this.values?.Comments ?  this.values.Comments : '']
      }
    );
    if (this.values) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }

    this.createModel = new applicationCreateModel();
  }

  public async submitApplication() {
    try {
      this.mapModel()
    }
    catch (error) {
      console.error('Error mapping model:', error);
      return;
    }
    await this.applicationService.submitApplication(this.createModel)
      .then(response => {
        this.popupService.openDialogMessage('Application submitted successfully');
        this.dismiss(response);
      })
      .catch(error => {
        this.popupService.openDialogMessage('Error submitting application: ' + error.message);
        this.dismiss();
      });
  }

  private mapModel() {
    this.createModel.name = this.applicationForm.get('name')?.value;
    this.createModel.surname = this.applicationForm.get('surname')?.value;
    this.createModel.email = this.applicationForm.get('email')?.value;
    this.createModel.comments = this.applicationForm.get('comments')?.value;
  }

  public dismiss(id?: string) {
    this.dialog.close(id);
  }
}
