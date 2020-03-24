import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Prueba2Component } from './components/prueba2/prueba2.component';


const routes: Routes = [
  {
    path: '',
    component: Prueba2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetodograficoRoutingModule { }
