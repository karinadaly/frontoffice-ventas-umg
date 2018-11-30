import { Injectable } from '@angular/core';
import { URL_API } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../components/interfaces/cliente.interface';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private _httpClient: HttpClient) { }

  getClientes() {
    return this._httpClient.get(`${URL_API}cliente`, {headers: this.getHeaders()});
  }

  getCliente(id: number) {
    return this._httpClient.get(`${URL_API}cliente/${id}`, {headers: this.getHeaders()});
  }

  addCliente(cliente: Cliente) {
    const body = JSON.stringify(cliente);
    return this._httpClient.post(`${URL_API}cliente`, body, {headers: this.getHeaders()});
  }

  updateCliente(cliente: Cliente) {
    const body = JSON.stringify(cliente);
    return this._httpClient.put(`${URL_API}cliente/${cliente.codigocliente}`, body, {headers: this.getHeaders()});
  }

  deleteCliente(id: number) {
    return this._httpClient.delete(`${URL_API}cliente/${id}`, {headers: this.getHeaders()});
  }

  getHeaders() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'Application/json')
      .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
      return headers;
  }
}
