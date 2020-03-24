import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormDataComponent } from './components/form-data/form-data.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FormDataComponent
  ],
  // Permite exportar los componentes que se crean en este modulo
  exports: [
    HeaderComponent,
    FormDataComponent
  ],
  imports: [
    CommonModule,
    //Permite implementar RouterLink dentro de este modulo
    RouterModule
  ]
})
export class SharedModule { }
