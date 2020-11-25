import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientsFormComponent } from './clients-form/clients-form.component';


@NgModule({
  declarations: [
    ClientsFormComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ],
  exports: [
    ClientsFormComponent
  ]
})
export class ClientesModule { }
