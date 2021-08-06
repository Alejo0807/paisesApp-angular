import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParamsBasic() { 
    return new HttpParams()
      .set('fields', 'name;capital;alpha2Code;flag;population')
  }

  constructor(private http: HttpClient) {
    
  }

  searchCountry( term:string ): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`
    return this.http.get<Country[]>(url, {params: this.httpParamsBasic});
  }

  searchCountryByCapital( term:string ): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`
    return this.http.get<Country[]>(url, {params: this.httpParamsBasic});
  }

  searchCountryByAlphaCode( alphaCode:string ): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${alphaCode}`
    return this.http.get<Country[]>(url);
  }

  searchCountriesByRegion( region:string ): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>(url, {params: this.httpParamsBasic});
  }
}
