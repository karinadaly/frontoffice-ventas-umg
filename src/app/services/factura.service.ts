import { Injectable } from '@angular/core';
import { URL_API } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Factura } from '../components/interfaces/factura.interface';
@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  constructor(private _httpClient: HttpClient) { }

  getFacturas() {
    return this._httpClient.get(`${URL_API}factura`, {headers: this.getHeaders()});
  }

  getFactura(id: number) {
    return this._httpClient.get(`${URL_API}factura/${id}`, {headers: this.getHeaders()});
  }

  addFactura(factura: Factura) {
    const body = JSON.stringify(factura);
    return this._httpClient.post(`${URL_API}factura`, body, {headers: this.getHeaders()});
  }

  updateFactura(factura: Factura) {
    const body = JSON.stringify(factura);
    return this._httpClient.put(`${URL_API}factura/${factura.codigoFactura}`, body, {headers: this.getHeaders()});
  }

  deleteFactura(id: number) {
    return this._httpClient.delete(`${URL_API}factura/${id}`, {headers: this.getHeaders()});
  }

  getHeaders() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'Application/json')
      .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
      return headers;
  }
}
