import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the EditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicio:ServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPage');
  }

  peticion=this.navParams.get('id');
  datos=this.servicio.getContacto(this.peticion);

  goToHome()
  {
  	this.navCtrl.push(HomePage);
  }

  saveData(n)
  {
  	this.servicio.updateContacto(n,this.datos);
  	this.datos={id:null,name:null,organizacion:null,telefono:null,email:null,img:null};
  }

}
