import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-calculator',
  templateUrl: './temp-calculator.component.html',
  styleUrls: ['./temp-calculator.component.scss']
})
export class TempCalculatorComponent implements OnInit {

  title = "Temperature Converter"
  c = 0;
  f = 32;

  constructor() { }

  ngOnInit() {
  }

  convertCtoF(){
    this.f = this.c * (9/5) + 32;
  }

  convertFtoC(){
    this.c = (this.f - 32) * (5/9);
  }

}
