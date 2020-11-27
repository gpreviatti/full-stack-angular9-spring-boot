import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from '../../../model/Cliente';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css'],
})
export class ClientsFormComponent implements OnInit {
  cliente: Cliente;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    let params : Observable<Params>= this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id']
      if (this.id) {
        this.service.getById(this.id).subscribe(
          res => this.cliente = res,
          error => this.cliente = new Cliente()
        )
      }
    })
  }

  onSubmit() {
    if (this.id) {
      this.service.update(this.cliente).subscribe(
        response => {
          this.errors = null;
          this.success = true;
          this.cliente = response;
        },
        error => {
          this.success = false;
          this.errors = ['Erro!'];
        }
      );
    } else {
      this.service.store(this.cliente).subscribe(
        response => {
          this.errors = null;
          this.success = true;
          this.cliente = response;
        },
        error => {
          this.success = false;
          this.errors = ['Erro!'];
        }
      );
    }
  }

  voltarLista() {
    this.router.navigate(['/clientes-lista']);
  }
}
