import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country-service/country.service';
import { Country } from '../country-service/country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  country: Country | undefined;
  isLightTheme: boolean = true;

  constructor(private route: ActivatedRoute, private countryService: CountryService) {}

  ngOnInit(): void {
    const countryName = this.route.snapshot.paramMap.get('countryName');
    if (countryName) {
      this.countryService.getCountryByName(countryName).subscribe(country => {
        this.country = country;
      });
    }

    const savedTheme = localStorage.getItem('theme');
    this.isLightTheme = savedTheme === 'light' || savedTheme === null;
    this.updateTheme();
  }

  toggleTheme(): void {
    this.isLightTheme = !this.isLightTheme;
    localStorage.setItem('theme', this.isLightTheme ? 'light' : 'dark');
    this.updateTheme();
  }

  updateTheme(): void {
    const body = document.body;
    if (this.isLightTheme) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    }
  }
}
