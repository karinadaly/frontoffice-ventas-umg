import { Injectable } from '@angular/core';
import { URL_API } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Proveedor } from '../components/interfaces/proveedor.interface';
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  constructor(private _httpClient: HttpClient) { }

  getProveedores() {
    return this._httpClient.get(`${URL_API}proveedor`, {headers: this.getHeaders()});
  }

  getProveedor(id: number) {
    return this._httpClient.get(`${URL_API}proveedor/${id}`, {headers: this.getHeaders()});
  }

  addProveedor(proveedor: Proveedor) {
    const body = JSON.stringify(proveedor);
    return this._httpClient.post(`${URL_API}proveedor`, body, {headers: this.getHeaders()});
  }

  updateProveedor(proveedor: Proveedor) {
    const body = JSON.stringify(proveedor);
    return this._httpClient.put(`${URL_API}proveedor/${proveedor.codigoProveedor}`, body, {headers: this.getHeaders()});
  }

  deleteProveedor(id: number) {
    return this._httpClient.delete(`${URL_API}proveedor/${id}`, {headers: this.getHeaders()});
  }

  getHeaders() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'Application/json')
      .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
      return headers;
  }
}
