import { Storage } from '@ionic/storage';
import { Login } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
     splashScreen: SplashScreen,
     public storageCtrl: Storage) 
     {
        platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          statusBar.styleDefault();
          splashScreen.hide();
        });

        this.verifcaLogin();
    }

  verifcaLogin(): void {
    this.storageCtrl.get('logado').then((data) => {
      if (data != true) {
        this.rootPage = Login;
      }
      
      console.log('Valor da chave logado: ', data);
    });

  }

  openPage(page: {title: string, component: any}): void {
    this.nav.setRoot(page.component)
  }
}

