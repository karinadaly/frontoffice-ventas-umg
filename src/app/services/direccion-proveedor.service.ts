import { Injectable } from '@angular/core';
import { URL_API } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DireccionProveedor } from '../components/interfaces/direccionProveedor.interface';
@Injectable({
  providedIn: 'root'
})
export class DireccionProveedorService {
  constructor(private _httpClient: HttpClient) { }

  getDireccionProveedores() {
    return this._httpClient.get(`${URL_API}direccion-proveedor`, {headers: this.getHeaders()});
  }

  getDireccionProveedor(id: number) {
    return this._httpClient.get(`${URL_API}direccion-proveedor/${id}`, {headers: this.getHeaders()});
  }

  addDireccionProveedor(direccionProveedor: DireccionProveedor) {
    const body = JSON.stringify(direccionProveedor);
    return this._httpClient.post(`${URL_API}direccion-proveedor`, body, {headers: this.getHeaders()});
  }

  updateDireccionProveedor(direccionProveedor: DireccionProveedor) {
    const body = JSON.stringify(direccionProveedor);
    return this._httpClient.put(`${URL_API}direccion-proveedor/${direccionProveedor.codigoDireccion}`,
    body, {headers: this.getHeaders()});
  }

  deleteDireccionProveedor(id: number) {
    return this._httpClient.delete(`${URL_API}direccion-proveedor/${id}`, {headers: this.getHeaders()});
  }

  getHeaders() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'Application/json')
      .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
      return headers;
  }
}
