import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {
  @Input() a: number;
  @Input() b: number;
  resultado: number;

  constructor() { 
    this.a = 1;
    this.b = 0;
    this.resultado = 0;
  }

  ngOnInit(): void {
  }

  sumar() {
    this.resultado = this.a + this.b;

  }

}
