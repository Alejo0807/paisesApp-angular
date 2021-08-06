import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [`
    li {
      cursor: pointer;
    }

  `
  ]
})
export class ByCountryComponent implements OnInit {

  type: string = 'Buscar pais...';
  term:string = '';
  existError: boolean = false;
  countries: Country[] = [];
  recommendations: Country[] = [];
  showRecommendations: boolean = false;
  
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }
  
  search( term: string ) {

    this.term = term;
    this.existError = false;
    this.showRecommendations = false;

    this.countryService.searchCountry(this.term)
      .subscribe( resp => {
        this.countries = resp;
        console.log(resp)
      }, (error) => {
        this.existError = true;
        this.countries = []
      });
  }

  recommendation( term: string) {
    this.existError = false;
    this.term = term;
    this.showRecommendations = true;

    this.countryService.searchCountry(term)
      .subscribe( 
        countries => this.recommendations = countries.splice(0,10),
        (err) => this.recommendations = []
      );
    // console.log(event);
  }

  searchRecommendation( term: string) {
    
    this.search(term);
  }


}
