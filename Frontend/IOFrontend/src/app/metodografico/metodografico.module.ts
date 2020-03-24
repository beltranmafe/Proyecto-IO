import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetodograficoRoutingModule } from './metodografico-routing.module';
import { MetodoGraficoComponent } from './components/metodo-grafico/metodo-grafico.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MetodoGraficoComponent, GraficoComponent],
  imports: [
    CommonModule,
    MetodograficoRoutingModule,
    SharedModule
  ]
})
export class MetodograficoModule { }
