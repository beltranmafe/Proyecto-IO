import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Metodo2fasesRoutingModule } from './metodo2fases-routing.module';
import { Metodo2fasesComponent } from './components/metodo2fases/metodo2fases.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [Metodo2fasesComponent],
  imports: [
    CommonModule,
    Metodo2fasesRoutingModule,
    SharedModule
  ]
})
export class Metodo2fasesModule { }
