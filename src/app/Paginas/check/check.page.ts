import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data= [
    {
      name: 'primary',
      selected: false,
      tipo: 'ios'
    },
    {
      name: 'secondary',
      selected: true,
      tipo: 'ios'
    },
    {
      name: 'tertiary',
      selected: false,
      tipo: 'md'
    },
    {
      name: 'success',
      selected: true,
      tipo: 'md'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  onClick( check ) {
    console.log(check);
  }

}
