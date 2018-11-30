import { Injectable } from '@angular/core';
import { URL_API } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetalleFactura } from '../components/interfaces/detalle-factura.interface';

@Injectable({
  providedIn: 'root'
})
export class DetalleFacturaService {
  constructor(private _httpClient: HttpClient) { }

  getHeaders() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'Application/json')
      .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
      return headers;
  }

  getDetalleFacturas() {
    return this._httpClient.get(`${URL_API}detalle-factura`, {headers: this.getHeaders()});
  }

  getDetalleFactura(id: number) {
    return this._httpClient.get(`${URL_API}detalle-factura/${id}`, {headers: this.getHeaders()});
  }

  addDetalleFactura(detalleFactura: DetalleFactura) {
    const body = JSON.stringify(detalleFactura);
    return this._httpClient.post(`${URL_API}detalle-factura`, body, {headers: this.getHeaders()});
  }

  updateDetalleFactura(detalleFactura: DetalleFactura) {
    const body = JSON.stringify(detalleFactura);
    return this._httpClient.put(`${URL_API}detalle-factura/${detalleFactura.codigoFacturaDetalle}`, body, {headers: this.getHeaders()});
  }

  deleteFactura(id: number) {
    return this._httpClient.delete(`${URL_API}detalle-factura/${id}`, {headers: this.getHeaders()});
  }
}
