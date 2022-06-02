import { Component, OnInit, Input } from '@angular/core';
import { Cuenta } from '../models/cuenta.model';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {
  @Input() prod: Cuenta[];
  constructor() { 
    this.prod = [];
  }

  ngOnInit(): void {
  }


  sumaTotal():number {
    let dinero = 0;
    this.prod.forEach(element => {

      dinero+= element.precio * element.cantidad;
      
    });

    return dinero;
  }


  sumaSinIva() {
    let dinero = Math.round(this.sumaTotal()/0.19);

    return dinero;
  }

}
