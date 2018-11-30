import { Injectable } from '@angular/core';
import { URL_API } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TelefonoProveedor } from '../components/interfaces/telefonoProveedor.interface';
@Injectable({
  providedIn: 'root'
})
export class TelefonoProveedorService {

  constructor(private _httpClient: HttpClient) { }

  getTelefonoProveedores() {
    return this._httpClient.get(`${URL_API}telefono-proveedor`, {headers: this.getHeaders()});
  }

  getTelefonoProveedor(id: number) {
    return this._httpClient.get(`${URL_API}telefono-proveedor/${id}`, {headers: this.getHeaders()});
  }

  addTelefonoProveedor(telefonoProveedor: TelefonoProveedor) {
    const body = JSON.stringify(telefonoProveedor);
    return this._httpClient.post(`${URL_API}telefono-proveedor`, body, {headers: this.getHeaders()});
  }

  updateTelefonoProveedor(telefonoProveedor: TelefonoProveedor) {
    const body = JSON.stringify(telefonoProveedor);
    return this._httpClient.put(`${URL_API}telefono-proveedor/${telefonoProveedor.codigoTelefono}`,
    body, {headers: this.getHeaders()});
  }

  deleteTelefonoProveedor(id: number) {
    return this._httpClient.delete(`${URL_API}telefono-proveedor/${id}`, {headers: this.getHeaders()});
  }

  getHeaders() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'Application/json')
      .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
      return headers;
  }
}
