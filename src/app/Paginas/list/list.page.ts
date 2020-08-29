import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../Service/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', {static: true}) lista: IonList;

  usuarios : Observable<any>;

  constructor(
    private dataSer: DataService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {

    this.usuarios = this.dataSer.getUser();
    
  }

  async presentToast(message: string){
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite( user){
    this.presentToast('Agregado a favoritos!');
    this.lista.closeSlidingItems();
  }

  share(user){
    this.presentToast('Compartido!!');
    this.lista.closeSlidingItems();
  }

  borrar(user){
    this.presentToast('Eliminado!!!');
    this.lista.closeSlidingItems();
  }

}
