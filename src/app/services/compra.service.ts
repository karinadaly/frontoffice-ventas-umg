import { Injectable } from '@angular/core';
import { URL_API } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Compra } from '../components/interfaces/compra.interface';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  constructor(private _httpClient: HttpClient) { }

  getCompras() {
    return this._httpClient.get(`${URL_API}compra`, { headers: this.getHeaders() });
  }

  getCompra(id: number) {
    return this._httpClient.get(`${URL_API}compra/${id}`, { headers: this.getHeaders() });
  }

  addCompra(compra: Compra) {
    const body = JSON.stringify(compra);
    return this._httpClient.post(`${URL_API}compra`, body, { headers: this.getHeaders() });
  }

  updateCompra(compra: Compra) {
    const body = JSON.stringify(compra);
    return this._httpClient.put(`${URL_API}compra/${compra.numeroDocumento}`, body, { headers: this.getHeaders() });
  }

  deleteCompra(id: number) {
    return this._httpClient.delete(`${URL_API}compra/${id}`, { headers: this.getHeaders() });
  }

  getHeaders() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'Application/json')
      .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
    return headers;
  }
}
