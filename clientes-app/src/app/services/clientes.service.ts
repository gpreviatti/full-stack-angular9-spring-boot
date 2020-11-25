import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  url: string = 'http://localhost:8080/api/clientes'

  constructor( private http: HttpClient ) {
  }

  getCliente () : Cliente {
    let cliente = new Cliente();
    cliente.nome = "Falano de tal";
    cliente.cpf = "8888888";
    return cliente;
  }

  store ( cliente : Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente);
  }
}
