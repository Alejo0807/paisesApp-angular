import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {

  // alphaCode: string = '';
  country!: Country;

  constructor(private activatedRoute: ActivatedRoute,
              private countryService: CountryService) { }

  ngOnInit(): void {

    // this.activatedRoute.params
    //   .subscribe( ({id}) => {
        
    //     this.countryService.searchCountryByAlphaCode(id)
    //       .subscribe( data => {
    //         console.log(data);
    //       })
    //   });
    this.activatedRoute.params
      .pipe(
        switchMap( (param) => this.countryService.searchCountryByAlphaCode(param.id)),
        tap(console.log)
      )
      .subscribe( resp => {
        this.country = resp;
      })
  }

   

}
