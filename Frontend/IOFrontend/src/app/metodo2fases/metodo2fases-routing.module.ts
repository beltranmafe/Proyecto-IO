import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Metodo2fasesComponent } from './components/metodo2fases/metodo2fases.component';


const routes: Routes = [
  {
    path: '',
    component: Metodo2fasesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Metodo2fasesRoutingModule { }
