import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [
  ]
})
export class CountryTableComponent implements OnInit {

  @Input()
  countries: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
