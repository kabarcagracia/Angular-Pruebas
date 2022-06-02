import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent implements OnInit {
  comidas: Producto[];
  @Output() ObjetoEnviado:EventEmitter<Producto>;
 
  constructor() { 
    this.comidas = [
      {
        nombre: 'A',
        precio: 1200,
        url: '/lksajdsalkd'
      },
      {
        nombre: 'B',
        precio: 1200,
        url: '/lksajdsalkd'
      },
      {
        nombre: 'C',
        precio: 1200,
        url: '/lksajdsalkd'
      },
      {
        nombre: 'D',
        precio: 1200,
        url: '/lksajdsalkd'
      },
      {
        nombre: 'E',
        precio: 1200,
        url: '/lksajdsalkd'
      },
      {
        nombre: 'F',
        precio: 1200,
        url: '/lksajdsalkd'
      },

    ];
    this.ObjetoEnviado = new EventEmitter(); 
  }

  ngOnInit(): void {
  }
  seleccion(seleccion: Producto){
    console.log(seleccion);
    this.ObjetoEnviado.emit(seleccion);
  }

}
