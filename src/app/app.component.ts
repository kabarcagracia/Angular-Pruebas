import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Cuenta } from './models/cuenta.model';
import { Tarea } from './models/tarea.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrayProductos: Cuenta[];
  arraytareas: Tarea[];
  title = 'mi-first-proyect';
  numerosa: number[];
  numerosb: number[];
  campoTexto1: string;

  persona: any;
  cuenta: any;
  datos: any;

  constructor(){
    this.arrayProductos = [];
    this.arraytareas = [];
    this.numerosa = [3,5,6];
    this.numerosb = [4,2,10];
    this.campoTexto1 = "Valor Inicial";
    this.cuenta = {};
    /*this.persona = {
      nombre: "[Nombre]",
      apellidos: "[Apellidos]",
      edad: 0
    };*/
    this.persona = {};
    this.datos = [];
  }

  onPulsada($event: string){
    console.log($event);
  }
  onCronometro($event: string){
    console.log($event);
  }
  onClick() {
    this.campoTexto1 = "se cambio el valor";
  }

  objectReceived(event:any) {
 
    this.arraytareas.push(event);
    //console.log(this.arraytareas);
  }

  objectProducts(event:any){



    const result = this.arrayProductos.filter(data => data.nombre == event.nombre);

// expected output: Array ["exuberant", "destruction", "present"]

    if(result.length > 0){
      this.arrayProductos.forEach(element => {
        if(element.nombre == event.nombre){
          element.cantidad+=1;
          return;
        }
      });
    } else {
      this.cuenta = {
        nombre: event.nombre,
        precio: event.precio,
        cantidad: 1
      };

      this.arrayProductos.push(this.cuenta);
    }
  this.cuenta = {};
    

    
    
    //console.log(this.arrayProductos);
    
  }
}
