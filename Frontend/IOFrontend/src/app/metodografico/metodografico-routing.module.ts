import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetodoGraficoComponent } from './components/metodo-grafico/metodo-grafico.component';


const routes: Routes = [
  {
    path: '',
    component: MetodoGraficoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetodograficoRoutingModule { }
