import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nuevaTarea: Tarea;
  @Output() ObjetoEnviado:EventEmitter<Tarea>;

  constructor() { 
    this.nuevaTarea = new Tarea();
    this.ObjetoEnviado = new EventEmitter(); 
  }

  ngOnInit(): void {
  }

  onSend(){
    this.ObjetoEnviado.emit(this.nuevaTarea);
    this.nuevaTarea = new Tarea();
  }

}
