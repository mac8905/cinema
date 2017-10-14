import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cinema-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedValue: string;

  cities = [
    { value: '0', viewValue: 'BOGOTÁ' },
    { value: '1', viewValue: 'BARRANQUILLA' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
