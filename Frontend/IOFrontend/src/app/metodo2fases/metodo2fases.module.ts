import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Metodo2fasesRoutingModule } from './metodo2fases-routing.module';
import { PruebaComponent } from './components/prueba/prueba.component';


@NgModule({
  declarations: [PruebaComponent],
  imports: [
    CommonModule,
    Metodo2fasesRoutingModule
  ]
})
export class Metodo2fasesModule { }
