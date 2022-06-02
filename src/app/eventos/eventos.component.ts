import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  num1: number;
  num2: number;
  resultado: number;

  constructor() { 
    this.num1 = 5;
    this.num2 = 37;
    this.resultado = 0;
  }

  ngOnInit(): void {
  }

  metodoClick(): void {
    alert("pulsado");
  }

  metodoSumar(): void {
    this.resultado = this.num1 + this.num2;
  }

}
