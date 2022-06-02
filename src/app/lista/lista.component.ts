import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() tareas: Tarea[];
  tareaCompletada: boolean;
  constructor() {
    this.tareas = [];
    this.tareaCompletada = false;
   }

  ngOnInit(): void {
  }
  mostrarData() {
    let data = '<ul>';
    for(let tarea of this.tareas) {
      data+=`<li>${tarea.titulo} - ${tarea.descripcion}</li>`;
    }

    data+='</ul>'
    return data;
  }


  completa(completa: number){

    this.tareas[completa].completa = true;

  }

  borrar(borrar: number) {
    
    for (let tarea in this.tareas) {
      if(parseInt(tarea) == borrar){
        this.tareas.splice(parseInt(tarea), 1);
      }
    }
  }

    //eliminar de tareas
    
   


  // arreglo datos jeje

}
