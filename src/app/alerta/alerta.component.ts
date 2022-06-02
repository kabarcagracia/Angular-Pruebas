import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {
  @Input() mensaje: string;
  @Input() subtitulo: string;

  @Output() alertaPulsada: EventEmitter<string>;

  constructor() { 
    this.mensaje = "[mensaje]";
    this.subtitulo = "[subtitulo]";

    this.alertaPulsada = new EventEmitter();
  }

  ngOnInit(): void {
  }
  onClick(){
    this.alertaPulsada.emit("alerta pulsada desde hijo");
  }

}
