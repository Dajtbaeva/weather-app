import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private URL = 'https://open-weather13.p.rapidapi.com';
  private XRapidAPIHostHeaderName = 'X-RapidAPI-Host';
  private XRapidAPIHostHeaderValue = 'open-weather13.p.rapidapi.com';
  private XRapidAPIKeyHeaderName = 'X-RapidAPI-Key';
  private XRapidAPIKeyHeaderValue =
    '09dbfb2a31mshe0bb391b6bbb143p1285cbjsna6be1a133e76';

  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.URL + '/city/' + city, {
      headers: new HttpHeaders()
        .set(this.XRapidAPIHostHeaderName, this.XRapidAPIHostHeaderValue)
        .set(this.XRapidAPIKeyHeaderName, this.XRapidAPIKeyHeaderValue),
    });
  }
}
