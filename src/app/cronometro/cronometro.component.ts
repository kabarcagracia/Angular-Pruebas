import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  @Input('numero') cronometro: number;
  @Output() alertaPulsada: EventEmitter<string>;

  constructor() { 
    this.cronometro = 10;
    this.alertaPulsada = new EventEmitter();
  }

  ngOnInit(): void {
    
  }
  onClick($event: object) {
    console.log($event);
    
    let interval = setInterval(() => {
      this.cronometro--;
      if(this.cronometro == 0){
        this.alertaPulsada.emit("Finaliza cronometro desde hijo");
        clearInterval(interval);
      }
    }, 1000);
  }
  onChange($event: object) {
    console.log($event);
  }

}
