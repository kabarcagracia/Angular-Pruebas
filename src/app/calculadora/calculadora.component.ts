import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  resultado: string;

  constructor() { 
    this.resultado = '';
  }

  ngOnInit(): void {
  }
  concatenar(dato: string) {
    console.log(dato);
    this.resultado += dato;

  }
  evaluar(){
    this.resultado = eval(this.resultado)

  }

}
