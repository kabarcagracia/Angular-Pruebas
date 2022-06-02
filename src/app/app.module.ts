import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// importar los componentes
import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { PadreComponent } from './padre/padre.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { EventosComponent } from './eventos/eventos.component';
import { ConteoDescComponent } from './conteo-desc/conteo-desc.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { AlertaComponent } from './alerta/alerta.component';
import { SumarComponent } from './sumar/sumar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { ComidasComponent } from './comidas/comidas.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { CuentaComponent } from './cuenta/cuenta.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    PadreComponent,
    Hijo1Component,
    EventosComponent,
    ConteoDescComponent,
    CronometroComponent,
    CalculadoraComponent,
    AlertaComponent,
    SumarComponent,
    FormularioComponent,
    ListaComponent,
    ComidasComponent,
    BebidasComponent,
    CuentaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
