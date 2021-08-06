import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {


  @Output()
  onEnter: EventEmitter<string> = new EventEmitter();

  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter();

  @Input()
  placeholder: string = '';


  debouncer: Subject<string> = new Subject();
  
  term: string = '';

  
  constructor() { }
  
  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(150))
    .subscribe( value => {
      this.onDebounce.emit(value);
    })
    // console.log(this.placeholder);
  }
  
  search() {
    this.onEnter.emit(this.term);
    // console.log(this.term);
  }

  keyPressed() {
    this.debouncer.next(this.term);
  }

}
