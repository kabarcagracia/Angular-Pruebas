import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteo-desc',
  templateUrl: './conteo-desc.component.html',
  styleUrls: ['./conteo-desc.component.css']
})
export class ConteoDescComponent implements OnInit {
  resultado: number;
  constructor() { 
    this.resultado = 10;
  }

  ngOnInit(): void {
  }

  conteoDescendiente(): void {
    setInterval(() => {
      if(this.resultado >= 1) {
        this.resultado = this.resultado - 1;
      }
    }, 1000);
    
  }
}
