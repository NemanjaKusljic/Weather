import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://localhost:8043/api/';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  private cities = 'cities';
  
  constructor(private http: HttpClient) { }

  allCities(){
    return this.http.get(this.getUrl());
  }

  private getUrl() {
    return `${BASE_URL}${this.cities}`;
  }

}
