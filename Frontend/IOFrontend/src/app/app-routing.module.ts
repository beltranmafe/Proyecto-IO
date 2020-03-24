import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';


const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },
      {
        path: 'inicio',
        loadChildren: () => import("./inicio/inicio.module").then(m => m.InicioModule)
      },
      {
        path: 'metodo_grafico',
        loadChildren: () => import("./metodografico/metodografico.module").then(m => m.MetodograficoModule)
      },
      {
        path: 'dos_fases',
        loadChildren: () => import("./metodo2fases/metodo2fases.module").then(m => m.Metodo2fasesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
