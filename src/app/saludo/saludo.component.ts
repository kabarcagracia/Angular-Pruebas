import { Component, OnInit } from '@angular/core';

//decorador
@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  mensaje: string;
  numero: number;
  idParrafo: string;
  
  constructor() { 
    this.mensaje = 'Un saludo';
    this.numero = 0;
    this.idParrafo = 'parrafo Principal';

    setInterval(() => {
      this.numero++;
      this.mensaje = 'Un saludo diferente' + this.numero;
    }, 6000);
  }

  ngOnInit(): void {
  }

  mostrarSaludo(): string {
    return 'Saludo';
  }

}
