import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}
 
  getWeatherData(cityName: string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=46d8c2ca2069c61a611332debafec24d&units=metric`);
  }
}
