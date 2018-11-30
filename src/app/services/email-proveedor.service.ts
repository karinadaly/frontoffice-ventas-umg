import { Injectable } from '@angular/core';
import { URL_API } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmailProveedor } from '../components/interfaces/emailProveedor.interface';
@Injectable({
  providedIn: 'root'
})
export class EmailProveedorService {

  constructor(private _httpClient: HttpClient) { }

  getEmailProveedores() {
    return this._httpClient.get(`${URL_API}email-proveedor`, {headers: this.getHeaders()});
  }

  getEmailProveedor(id: number) {
    return this._httpClient.get(`${URL_API}email-proveedor/${id}`, {headers: this.getHeaders()});
  }

  addEmailProveedor(emailProveedor: EmailProveedor) {
    const body = JSON.stringify(emailProveedor);
    return this._httpClient.post(`${URL_API}email-proveedor`, body, {headers: this.getHeaders()});
  }

  updateEmailProveedor(emailProveedor: EmailProveedor) {
    const body = JSON.stringify(emailProveedor);
    return this._httpClient.put(`${URL_API}email-proveedor/${emailProveedor.codigoEmail}`,
    body, {headers: this.getHeaders()});
  }

  deleteEmailProveedor(id: number) {
    return this._httpClient.delete(`${URL_API}email-proveedor/${id}`, {headers: this.getHeaders()});
  }

  getHeaders() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'Application/json')
      .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
      return headers;
  }
}
