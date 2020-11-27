import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';


@NgModule({
  declarations: [
    ClientsFormComponent,
    ClientesListaComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ],
  exports: [
    ClientsFormComponent
  ]
})
export class ClientesModule { }
