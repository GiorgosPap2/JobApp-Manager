import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApplicationViewModel } from '../models/ApplicationViewModel';
import { applicationCreateModel } from '../models/ApplicationCreateModel';

@Injectable({
  providedIn: 'root'
})

export class ApplicationService {

  private apiUrl = 'https://localhost:7222/api/application'; 

  constructor(private httpClient: HttpClient) { }

  /**
   * Submits a job application to the API.
   * @param application The application data to be submitted.
   * @returns A promise that resolves with the response from the API.
   */
  public async submitApplication(application: applicationCreateModel): Promise<string> {
    let url = this.constructUrl('createapplication'); 
    const response = await lastValueFrom(this.httpClient.post<string>(url, application));
    
    return response;
  }

  public getApplicationById(id: string): Promise<ApplicationViewModel> {
    let url = this.constructUrl(`getapplicationbyid?id=${id}`);
    return lastValueFrom(this.httpClient.get<ApplicationViewModel>(url));
  }

  private constructUrl(extraEndpoints: string): string {
    return `${this.apiUrl}/${extraEndpoints}`;
  }
}
