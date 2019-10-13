import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class weatherComponent implements OnChanges,OnInit {
  @Input() lat: string;
  @Input() lng: string;
  city: string;
  temp: number;

  public location: string;
  public weatherIconUrl: string;
  public weatherText: string;
  public temperatureValue: number;
  public tempMin: string;
  public tempMax: string;
  public temperatureUnit: string;
  public isDaytime: boolean;
  public whichdate: string;
  public wspeed: string;
  public precipitation: string;
  icon: string;

  constructor(private http: HttpClient) { }

  ngOnChanges() {
    let url = 'http://api.openweathermap.org/data/2.5/weather?'
    + 'lat=' + this.lat
    + '&lon=' + this.lng
    + '&units=metric'
    + '&lang=en'
    + '&appid=f135927625fe9d98326cf0d08b71f1d6'; // your api key here

    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      this.icon= data.weather[0].icon;
      this.city = data.name;
      this.temp = data.main.temp.toFixed(1); 
      this.tempMin = data.main.temp_min.toFixed(1);     
      this.tempMax = data.main.temp_max.toFixed(1);
      this.weatherText = data.weather[0].description;
      this.isDaytime = true ;
      this.weatherIconUrl = "http://openweathermap.org/img/w/" +data.weather[0].icon + ".png",
      this.temperatureValue = data.main.temp;
      this.whichdate = Date();
      this.wspeed = data.wind.speed;
      this.precipitation = data.main.humidity;
    this.temperatureUnit = data.main.temperatureUnit;
   });
  }

  ngOnInit() {
    let url = 'http://api.openweathermap.org/data/2.5/weather?'
    + 'lat=' + this.lat
    + '&lon=' + this.lng
    + '&units=metric'
    + '&lang=en'
    + '&appid=f135927625fe9d98326cf0d08b71f1d6'; // your api key here

    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      this.city = data.name;
      this.temp = data.main.temp.toFixed(1);
   });


  }

}
