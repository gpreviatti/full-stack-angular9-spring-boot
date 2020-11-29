import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {
  clientes : Cliente[] = [];
  clienteSelecionado : Cliente;
  mensagemSucesso : string;

  constructor(
    private service : ClientesService,
    private router : Router,
  ) { }

  ngOnInit(): void {
	this.getClientes();
  }

  getClientes() {
	this.service
    .get()
    .subscribe(
      res => this.clientes = res,
      error => this.clientes = []
    );
  }

  novoCadastro() {
    this.router.navigate(['/clientes-form']);
  }

  preparaDelecao (cliente : Cliente) {
	this.clienteSelecionado = cliente;
  }

  deletarCliente () {
	this.service
    .delete(this.clienteSelecionado)
    .subscribe(
		res => {
			this.mensagemSucesso = `Cliente ${this.clienteSelecionado.nome} deletado com sucesso!`
			this.getClientes();
		},
		error => this.mensagemSucesso = `Ocorreu um erro ao deletar o cliente ${this.clienteSelecionado.nome}`
    );
  }

}
