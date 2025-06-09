import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AngularToastifyModule, ToastService } from 'angular-toastify';

@Component({
  selector: 'app-current-component',
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    AngularToastifyModule,
  ],
  templateUrl: './current.component.html',
  styleUrl: './current.component.css',
})
export class CurrentComponent {
  weatherData: any;
  selectedCity: string = 'Lucknow';
  constructor(
    private weatherService: WeatherService,
    private toastService: ToastService
  ) {
    this.getWeatherData();
  }

  getCurrentWeather() {
    this.getWeatherData();
  }

  getWeatherData() {
    this.weatherService.getCurrentWeather(this.selectedCity).subscribe({
      next: (data) => {
        console.log(data);
        this.weatherData = data;
        this.toastService.success('Weather data fetched successfully!!');
      },
      error: (error) => {
        console.error('Error fetching Current Weather' + error);
      },
    });
  }

  // getWeatherBackgroundClass(): string {
  //   if (!this.weatherData) return '';

  //   const condition = this.weatherData.current.condition.text.toLowerCase();

  //   if (condition.includes('sunny') || condition.includes('clear')) {
  //     return 'bg-yellow-200';
  //   } else if (condition.includes('cloud')) {
  //     return 'bg-gray-300';
  //   } else if (condition.includes('rain')) {
  //     return 'bg-blue-200';
  //   } else if (condition.includes('snow')) {
  //     return 'bg-white';
  //   } else if (condition.includes('storm') || condition.includes('thunder')) {
  //     return 'bg-gray-700 text-white';
  //   } else {
  //     return 'bg-gray-100';
  //   }
  // }

  getWeatherBackgroundClass(): string {
    if (!this.weatherData) return '';

    const condition = this.weatherData.current.condition.text.toLowerCase();

    if (condition.includes('sunny') || condition.includes('clear')) {
      return 'bg-sunny';
    } else if (condition.includes('cloud')) {
      return 'bg-cloudy';
    } else if (condition.includes('rain')) {
      return 'bg-rainy';
    } else if (condition.includes('snow')) {
      return 'bg-snowy';
    } else if (condition.includes('storm') || condition.includes('thunder')) {
      return 'bg-stormy';
    } else {
      return 'bg-default';
    }
  }
}
