import { Injectable } from "@angular/core";
import { Cliente } from "../model/Cliente";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ClientesService {
	url: string = "http://localhost:8080/api/clientes/";

	constructor(private http: HttpClient) {}

	/**
	 * Get all resources
	 */
	get(): Observable<Cliente[]> {
		return this.http.get<Cliente[]>(this.url);
	}

	/**
	 * Get a resource
	 * @param id
	 */
	getById(id: number): Observable<Cliente> {
		return this.http.get<Cliente>(this.url + id);
	}

	/**
	 * Create new resource
	 * @param cliente
	 */
	store(cliente: Cliente): Observable<Cliente> {
		return this.http.post<Cliente>(this.url, cliente);
	}

	/**
	 * Update resource
	 * @param cliente
	 */
	update(cliente: Cliente): Observable<any> {
		return this.http.put<Cliente>(this.url + cliente.id, cliente);
	}

	/**
	 * Delete a resource
	 * @param id
	 */
	delete(cliente : Cliente): Observable<any> {
		return this.http.delete<any>(this.url + cliente.id);
	}
}
