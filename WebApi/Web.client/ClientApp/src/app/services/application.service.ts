import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  public async submitApplication(application: any): Promise<any> {
    let url = this.constructUrl('createapplication'); 
    return this.httpClient.post(url, application);
  }

  private constructUrl(endpoints: string): string {
    return `${this.apiUrl}/${endpoints}`;
  }
}
