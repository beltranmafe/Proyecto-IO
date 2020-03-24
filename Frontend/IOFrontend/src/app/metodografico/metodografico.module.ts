import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetodograficoRoutingModule } from './metodografico-routing.module';
import { Prueba2Component } from './components/prueba2/prueba2.component';


@NgModule({
  declarations: [Prueba2Component],
  imports: [
    CommonModule,
    MetodograficoRoutingModule
  ]
})
export class MetodograficoModule { }
