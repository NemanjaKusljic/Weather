import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICity } from './city.model';

const BASE_URL = 'https://localhost:8043/api/';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  private cities = 'cities';
  private new = '/new_city';
  
  constructor(private http: HttpClient) { }

  allCities(){
    return this.http.get(this.getUrl());
  }

  createCity(city: ICity){
    const newCity = {
      name: city.cityName,
      country: city.country
    }
    return this.http.post(this.getNewUrl(), newCity);
  }

  private getUrl() {
    return `${BASE_URL}${this.cities}`;
  }

  private getNewUrl(){
    return `${BASE_URL}${this.cities}${this.new}`
  }

}
