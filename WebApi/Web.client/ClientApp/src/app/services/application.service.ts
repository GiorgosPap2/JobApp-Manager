import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApplicationViewModel } from '../models/ApplicationViewModel';
import { applicationCreateModel } from '../models/ApplicationCreateModel';
import { JobPostingViewModel } from '../models/JobPostingViewModel';

@Injectable({
  providedIn: 'root'
})

export class ApplicationService {

  private apiUrl = 'https://localhost:7222/api'; 

  constructor(private httpClient: HttpClient) { }

  /**
   * Submits a job application to the API.
   * @param application The application data to be submitted.
   * @returns A promise that resolves with the response from the API.
   */
  public async submitApplication(application: applicationCreateModel): Promise<string> {
    let url = this.constructUrl('application', 'createapplication');
    const response = await lastValueFrom(this.httpClient.post<string>(url, application));
    
    return response;
  }

  /**
   * Retrieves a job application by its ID.
   * @param id The ID of the application to retrieve.
   * @returns A promise that resolves with the application data.
   */
  public getApplicationById(id: string): Promise<ApplicationViewModel> {
    let url = this.constructUrl('application', `getapplicationbyid?id=${id}`);
    return lastValueFrom(this.httpClient.get<ApplicationViewModel>(url));
  }

  public getJobPostingsById(Id: string): Promise<JobPostingViewModel> {
    let url = this.constructUrl('posting', `getpostingbyid?id=${Id}`);
    return lastValueFrom(this.httpClient.get<JobPostingViewModel>(url));
  }

  // Constructs the URL for the API endpoint.
  private constructUrl(controller: string, extraEndpoints: string): string {
    return `${this.apiUrl}/${controller}/${extraEndpoints}`;
  }
}
