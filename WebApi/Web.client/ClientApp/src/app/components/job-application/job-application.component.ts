import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { applicationCreateModel } from '../../models/ApplicationCreateModel';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-job-application',
  standalone: false,
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.scss'
})
export class JobApplicationComponent implements OnInit{

  public applicationForm!: FormGroup;
  private createModel!: applicationCreateModel;

  constructor(private fb: FormBuilder,
              private applicationService: ApplicationService,
) {
    
  }

  ngOnInit(): void {
      this.applicationForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(2)]],
        surname: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        comments: ['']
      }
    )

    this.createModel = new applicationCreateModel();
  }

  public submitApplication() {
    try {
      this.mapModel()
    }
    catch (error) {
      console.error('Error mapping model:', error);
      return;
    }
    this.applicationService.submitApplication(this.createModel)
      .then(response => {
        console.log('Application submitted successfully:', response);
        this.dismiss();
      })
      .catch(error => {
        console.error('Error submitting application:', error);
      });

  }

  private mapModel() {
    this.createModel.name = this.applicationForm.get('name')?.value;
    this.createModel.surname = this.applicationForm.get('surname')?.value;
    this.createModel.email = this.applicationForm.get('email')?.value;
    this.createModel.comments = this.applicationForm.get('comments')?.value;
  }

  public dismiss() {
    
  }

}
