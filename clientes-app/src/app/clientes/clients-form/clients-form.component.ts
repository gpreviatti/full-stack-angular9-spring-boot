import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from '../../model/Cliente';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {
  cliente : Cliente;
  success : boolean = false;
  errors : String[];

  constructor(private service : ClientesService) { 
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service
    .store(this.cliente)
    .subscribe( response => {
      this.errors = null;
      this.success = true;
      this.cliente = response;
    }, error => {
      this.success = false;
      this.errors = ["Erro!"]
    })
  }

}
