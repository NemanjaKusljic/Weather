
import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../shared/cities.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  cities: any;
  //show = false;
  constructor(private citiesService: CitiesService ) { }

  ngOnInit(): void {
    this.loadCities();
  }



  loadCities() {
    this.citiesService.allCities()
    .subscribe(cities => this.cities = cities);
  }

}
