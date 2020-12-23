import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../shared/cities.service';
import { ICity } from '../shared/city.model';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent implements OnInit {
  
  constructor(private citiesService: CitiesService) { }

  ngOnInit(): void {
  }


  saveCity(city: ICity){
    
    this.citiesService.createCity(city)
    .subscribe(res => console.log(res));

  }

}
