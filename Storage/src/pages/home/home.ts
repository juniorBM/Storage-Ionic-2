import { Login } from './../login/login';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nome: string;
  senha: string;
  logado: boolean;

  constructor(
    public navCtrl: NavController,
    public storageCtrl: Storage) {

      this.storageCtrl.get('nome').then((data) => {
        this.nome = data
      })

      this.storageCtrl.get('senha').then((data) => {
        this.senha = data
      })

      this.storageCtrl.get('logado').then((data) => {
        this.logado = data
      })

  }


  deslogar(): void {
    this.storageCtrl.remove('nome');
    this.storageCtrl.remove('senha');
    this.storageCtrl.remove('logado');
    this.navCtrl.setRoot(Login);
  }



}
