import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientsFormComponent } from './clients-form/clients-form.component';


const routes: Routes = [
  {path: "clientes-form", component: ClientsFormComponent},
  {path: "clientes-form/:id", component: ClientsFormComponent},
  {path: "clientes-lista", component: ClientesListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
