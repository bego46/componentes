import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  public fecha: Date = new Date();
  public customPickerOptions;
  public customDate;

  constructor() { }

  ngOnInit() {
    
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: ( evento ) => {
          console.log('Clicked Save');
          console.log(evento);
        }
      },
      {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log, Do not Dismiss');
          return false;
        }
      }]
    }


  }

  cambioFecha( event ) {
    console.log('ionChange', event);
    console.log('data', new Date( event.detail.value ));
  }

}
