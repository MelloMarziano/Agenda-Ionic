import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar';
import { ContactoPage } from '../contacto/contacto';

import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public servicio: ServiceProvider) {
    this.datos=this.servicio.getContactos();
    console.log(this.datos);
  }

  datos=[];


  goToAdd()
  {
  	this.navCtrl.push(AgregarPage);
  }

  goToContact(n)
  {
  	this.navCtrl.push(ContactoPage,{id:n});
  }

  deleteContact(n)
  {
    this.servicio.deleteContacto(n);
  }

}
