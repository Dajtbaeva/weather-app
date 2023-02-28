import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})

export class WeatherComponent implements OnInit {
  title = 'weather-app';
  weatherData?: WeatherData;
  city = 'Almaty';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.city);
    this.city = '';
  }

  private getWeatherData(city: string) {
    this.weatherService.getWeatherData(city).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      },
    });
  }

  search() {
    this.getWeatherData(this.city);
    this.city = '';
  }

  toCelcius(temp: number): number {
    return (temp - 32) * (5 / 9);
  }
}
