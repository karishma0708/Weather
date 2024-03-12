import { Component } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  myWeather:any;
  temprature:number=0;
  mininum:number=0;
  maximum:number=0;
  humidity:number=0;
  wind:number=0;
  infoblockvalue: any;
  cityName:string="Pune";
  errorMessage: string='';
  isSuccess: boolean = false; 
  iconURL:string='';
constructor (private weatherService:WeatherService){}

ngOnInit():void{
  this.getWeatherData(this.cityName);
  this.cityName='';
}

onSubmit(){
  this.getWeatherData(this.cityName);
  this.cityName='';
  
}

private getWeatherData(cityName:string){
  this.weatherService.getWeatherData(cityName).subscribe({
    next:(res)=>{
      console.log(res);
      this.myWeather=res;
      // console.log(this.myWeather);
      this.temprature=this.myWeather.main.temp;
      this.infoblockvalue=this.myWeather.main.temp_min;
      this.infoblockvalue=this.myWeather.main.temp_max;
      this.infoblockvalue=this.myWeather.wind.speed;
      this.infoblockvalue=this.myWeather.main.humidity;

      this.errorMessage = '';
      this.isSuccess = true;
    },
    error:(error) =>{
      console.log(error.message);
      if (error.status === 404) 
        {
          this.errorMessage = 'City not found. Please enter a valid city name.';
        } 
        this.isSuccess = false;
    },
      complete:()=>console.log("API call complete")
    
  })
}

}
