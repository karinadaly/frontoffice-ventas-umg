import { Injectable } from '@angular/core';
import { URL_API } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetalleCompra } from '../components/interfaces/detalle-compra.interface';

@Injectable({
  providedIn: 'root'
})
export class DetalleCompraService {
  constructor(private _httpClient: HttpClient) { }

  getDetalleCompras() {
    return this._httpClient.get(`${URL_API}detalle-compra`, { headers: this.getHeaders() });
  }

  getDetalleCompra(id: number) {
    return this._httpClient.get(`${URL_API}detalle-compra/${id}`, { headers: this.getHeaders() });
  }

  addDetalleCompra(detalleCompra: DetalleCompra) {
    const body = JSON.stringify(detalleCompra);
    return this._httpClient.post(`${URL_API}detalle-compra`, body, { headers: this.getHeaders() });
  }

  updateDetalleCompra(detalleCompra: DetalleCompra) {
    const body = JSON.stringify(detalleCompra);
    return this._httpClient.put(`${URL_API}detalle-compra/${detalleCompra.codigoDetalleCompra}`, body, { headers: this.getHeaders() });
  }

  deleteDetalleCompra(id: number) {
    return this._httpClient.delete(`${URL_API}detalle-compra/${id}`, { headers: this.getHeaders() });
  }

  getHeaders() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'Application/json')
      .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
    return headers;
  }
}
