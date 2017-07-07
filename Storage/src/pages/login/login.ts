import { HomePage } from './../home/home';
import { Storage } from '@ionic/storage';
import { Usuario } from './models/usuario.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  private usuarioModel: Usuario;
  private login : FormGroup;
  nome: string;
  senha: string;
  logado: true;

  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storageCtrl: Storage) 
    {
      this.login = this.formBuilder.group({
          nomeUsuario: ['', Validators.required],
          senhaUsuario: ['', Validators.required],
      });
      this.storageCtrl.get('nome').then((data) => {
        this.nome = data;  
      });

      this.storageCtrl.get('senha').then((data) => {
        this.senha = data;  
      });

      this.storageCtrl.get('logado').then((data) => {
        this.logado = data;  
      });

      console.log(this.nome);
      console.log(this.senha);
      console.log(this.logado);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  onSubmit(): void {
    this.logar();
    this.navCtrl.push(HomePage);
  }


  logar() {
    this.usuarioModel = this.login.value;
    this.storageCtrl.set('nome', this.usuarioModel.nomeUsuario);
    this.storageCtrl.set('senha', this.usuarioModel.senhaUsuario);
    this.storageCtrl.set('logado', true);
    
    this.storageCtrl.get('nome').then((data) => {
      console.log(data);
      
    })  
  }

}
