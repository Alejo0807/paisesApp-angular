import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent implements OnInit {

  ngOnInit(): void {
  }
  
  type: string = 'Buscar capital...';
  term: string = '';
  existError: boolean = false;
  countries: Country[] = [];
  
  constructor(private countryService: CountryService) { }

  search( term: string ) {

    this.term = term;
    this.existError = false;

    this.countryService.searchCountryByCapital(this.term)
      .subscribe( resp => {
        this.countries = resp;
        console.log(resp)
      }, (error) => {
        this.existError = true;
        this.countries = []
      });
  }

  recommendations( event: string) {
    this.existError = false;
  }

}
