import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('assets/data.json');
  }

  getCountryByName(countryName: string | null): Observable<Country | undefined> {
    return this.getCountries().pipe(
      map(countries => countries.find(country => country.name.toLowerCase() === countryName?.toLowerCase()))
    );
  }
}
