import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/Service/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, {static : true}) segment: IonSegment;

  superHeroes: Observable<any>;
  valorSegment = '';
  publisher = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.segment.value = 'Todos';
    this.superHeroes = this.dataService.getHeroes();
    
    
  }

  segmentChanged( event ) {
    this.valorSegment = event.detail.value

    if ( this.valorSegment === 'Todos') {
      this.publisher = '';
      return;
    }    

    this.publisher = this.valorSegment;

    console.log(this.valorSegment);
  }

}
