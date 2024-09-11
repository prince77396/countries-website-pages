import { Component, OnInit } from '@angular/core';
import { Country } from '../country-service/country';
import { CountryService } from '../country-service/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  regions: string[] = ["Africa", "America", "Asia", "Europe", "Oceania"];
  countries: Country[] = [];
  selectedCountry: any = null;

  constructor(private countryService: CountryService, private router: Router) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;   
    });
  }

  onRegionChange(): void {
  console.log("clicked");
  
    // Add filter logic based on selected region
  }
}
