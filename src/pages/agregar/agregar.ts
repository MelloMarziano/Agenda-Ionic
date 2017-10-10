import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ServiceProvider } from  '../../providers/service/service';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicio:ServiceProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AgregarPage');
  }

  datos={id:null,name:null,organizacion:null,telefono:null,email:null,img:null};

  goToHome()
  {
  	this.navCtrl.push(HomePage);
  }
  numero=Math.round(Math.random()*6)

  cargarImagen()
  {

  switch (this.numero) {
    case 0:
      this.datos.img="boy.png";
      break;
    case 1:
      this.datos.img="girl.png";
      break;
    case 2:
      this.datos.img="people-1.png";
      break;
    case 3:
      this.datos.img="people-2.png";
      break;
    case 4:
      this.datos.img="people.png";
      break;
    case 5:
      this.datos.img="social.png";
      break;
    case 6:
      this.datos.img="team.png";
      break;

    default:
      console.log(this.numero);
      break;
  }
  }

  saveData()
  {
    this.datos.id=Date.now();
    this.cargarImagen();
    this.servicio.addContacto(this.datos);
    this.datos={id:null,name:null,organizacion:null,telefono:null,email:null,img:null};
  }

}
