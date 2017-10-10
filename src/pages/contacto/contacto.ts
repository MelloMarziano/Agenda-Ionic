import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EditarPage } from '../editar/editar';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicio:ServiceProvider) {
  	this.loadContact();
  }

 

  
peticion=0;
respuesta:any=[];
imagen="";
nombre="";
numero="";
organizacion="";
email="";
estilos={};
id=0;

  loadContact()
  {
  	
	  this.peticion=this.navParams.get('id');


	  this.respuesta=this.servicio.getContacto(this.peticion);
    this.id=this.respuesta.id;
	  this.imagen="assets/img/users/"+this.respuesta.img;
	  this.nombre=this.respuesta.name;
	  this.numero=this.respuesta.telefono;
	  this.organizacion=this.respuesta.organizacion;
	  this.email=this.respuesta.email;
	  
	  this.estilos={
	    	'background' : 'url('+this.imagen+')',
	    	'background-size' : 'cover',
	    	'background-repeat':'no-repeat',
	    	'background-color': '#7f8c8d'
	    	

	    }	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
    
    

  }

  goToHome()
  {
  	this.navCtrl.push(HomePage);
  }

  goToEdit(n)
  {
    this.navCtrl.push(EditarPage, {id:n});
  }





}
