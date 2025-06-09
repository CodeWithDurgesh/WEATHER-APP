import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CurrentComponent } from './components/current/current.component';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, CommonModule, CurrentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'WEATHER-APP';

  user!: any;
  imageUrl = '/assets/rain.jpg';

  constructor(private http: HttpClient) {}

  getData() {
    //https://dummyjson.com/carts
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe({
      next: (data) => {
        console.log('Data fetched Successfully.', data);
        this.user = data;
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
    });
    console.log('Data fetched Successfully.');
  }
}
