import { Component, OnInit } from '@angular/core';
import { Tenure } from '../models/tenure';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public minimumIncomeValue = 10000;
  public maximumIncomeValue = 300000;
  public selectedValue = 0;

  public minimumExpenseValue = 10000;
  public maximumExpenseValue = 300000;
  public selectedExpenseValue = 0;

  public EMITenures: Tenure[] = [
    { value: 6, viewValue: '6 Months' },
    { value: 9, viewValue: '9 Months' },
    { value: 12, viewValue: '12 Months' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
