import { Injectable } from '@angular/core';
import { URL_API } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmailCliente} from '../components/interfaces/emailCliente.interface';
@Injectable({
  providedIn: 'root'
})
export class EmailClienteService {
  constructor(private _httpClient: HttpClient) { }

  getEmailClientes() {
    return this._httpClient.get(`${URL_API}emailCliente`, {headers: this.getHeaders()});
  }

  getEmailCliente(id: number) {
    return this._httpClient.get(`${URL_API}emailCliente/${id}`, {headers: this.getHeaders()});
  }

  addEmailCliente(emailCliente: EmailCliente) {
    const body = JSON.stringify(emailCliente);
    return this._httpClient.post(`${URL_API}emailCliente`, body, {headers: this.getHeaders()});
  }

  updateEmailCliente(emailCliente: EmailCliente) {
    const body = JSON.stringify(emailCliente);
    return this._httpClient.put(`${URL_API}emailCliente/${emailCliente.codigoEmail}`, body, {headers: this.getHeaders()});
  }

  deleteEmailCliente(id: number) {
    return this._httpClient.delete(`${URL_API}emailCliente/${id}`, {headers: this.getHeaders()});
  }

  getHeaders() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'Application/json')
      .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
      return headers;
  }
}
