import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientsFormComponent } from './clients-form/clients-form.component';


@NgModule({
  declarations: [
    ClientsFormComponent
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
