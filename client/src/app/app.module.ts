import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { CitiesService } from './shared/cities.service';
import { HttpClientModule } from '@angular/common/http';
import { CityFormComponent } from './city-form/city-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    CityFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
