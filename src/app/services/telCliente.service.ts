import { Injectable } from '@angular/core';
import { URL_API } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TelCliente } from '../components/interfaces/telCliente.interface';
@Injectable({
  providedIn: 'root'
})
export class TelClienteService {
  constructor(private _httpClient: HttpClient) { }

  getTelClientes() {
    return this._httpClient.get(`${URL_API}telefono-cliente`, {headers: this.getHeaders()});
  }

  getTelCliente(id: number) {
    return this._httpClient.get(`${URL_API}telefono-cliente/${id}`, {headers: this.getHeaders()});
  }

  addTelCliente(telCliente: TelCliente) {
    const body = JSON.stringify(telCliente);
    return this._httpClient.post(`${URL_API}telefono-cliente`, body, {headers: this.getHeaders()});
  }

  updateTelCliente(telCliente: TelCliente) {
    const body = JSON.stringify(telCliente);
    return this._httpClient.put(`${URL_API}telefono-cliente/${telCliente.codigoTelefono}`, body, {headers: this.getHeaders()});
  }

  deleteTelCliente(id: number) {
    return this._httpClient.delete(`${URL_API}telefono-cliente/${id}`, {headers: this.getHeaders()});
  }

  getHeaders() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'Application/json')
      .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
      return headers;
  }
}
