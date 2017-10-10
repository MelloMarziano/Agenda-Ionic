import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  constructor() {
    //console.log('Hello ServiceProvider Provider');
  }

    datos=
  [
  	{id:1,name:'Eliu Ortega',organizacion:'Simphony Records',telefono:'809-504-1616',email:'eliu.orteg@gmail.com',img:'team.png'},
  	{id:2,name:'Francisco Ortega',organizacion:'Simphony Records',telefono:'809-504-1616',email:'eliu.orteg@gmail.com',img:'team.png'},
  	{id:3,name:'Alberto Ortega',organizacion:'Simphony Records',telefono:'809-504-1616',email:'eliu.orteg@gmail.com',img:'team.png'}
  ]




  getContactos()
  {
  	return this.datos;
  }

  getContacto(n)
  {
  	var numero=this.datos.findIndex(i => i.id === n);
  	//console.log(n);
  	//console.log(numero);
  	return this.datos[numero];
  }

  addContacto(n)
  {
  	this.datos.push(n);
  }

  updateContacto(n,m)
  {
  	var numero=this.datos.findIndex(i => i.id === n);
  	this.datos[numero]=m;
  }

  deleteContacto(n)
  {
  		var numero=this.datos.findIndex(i => i.id === n);
  	
  		this.datos.splice(numero,1);
  }

}
