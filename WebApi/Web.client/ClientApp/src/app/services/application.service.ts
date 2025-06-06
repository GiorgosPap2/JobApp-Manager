import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApplicationViewModel } from '../models/ApplicationViewModel';

@Injectable({
  providedIn: 'root'
})

export class ApplicationService {

  private apiUrl = 'https://api.example.com/applications'; 

  constructor(private httpClient: HttpClient) { }

  /**
   * Submits a job application to the API.
   * @param application The application data to be submitted.
   * @returns A promise that resolves with the response from the API.
   */
  public async submitApplication(application: any): Promise<ApplicationViewModel> {
    let url = this.constructUrl('createapplication'); 
    const response = await lastValueFrom(this.httpClient.post<ApplicationViewModel>(url, application));
    
    return response;
  }

  public getApplicationById(id: string): Promise<ApplicationViewModel> {
    let url = this.constructUrl(`getapplication/${id}`);
    return lastValueFrom(this.httpClient.get<ApplicationViewModel>(url));
  }

  private constructUrl(extraEndpoints: string): string {
    return `${this.apiUrl}/${extraEndpoints}`;
  }
}
