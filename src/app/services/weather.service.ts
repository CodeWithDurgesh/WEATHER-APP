import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  baseURL = 'https://api.weatherapi.com/v1/';
  apiKey = '372b7320bd0f406bb38102509250606';

  getCurrentWeather(city: string): Observable<any> {
    const apiUrl = `${this.baseURL}/current.json?q=${city}&key=${this.apiKey}`;
    return this.http.get(apiUrl);
  }


  
}
