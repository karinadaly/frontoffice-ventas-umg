import { Injectable } from '@angular/core';
import { URL_API } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DirCliente} from '../components/interfaces/dirCliente.interface';
@Injectable({
  providedIn: 'root'
})
export class DirClienteService {
  constructor(private _httpClient: HttpClient) { }

  getDirClientes() {
    return this._httpClient.get(`${URL_API}dirCliente`, {headers: this.getHeaders()});
  }

  getDirCliente(id: number) {
    return this._httpClient.get(`${URL_API}dirCliente/${id}`, {headers: this.getHeaders()});
  }

  addDirCliente(dirCliente: DirCliente) {
    const body = JSON.stringify(dirCliente);
    return this._httpClient.post(`${URL_API}dirCliente`, body, {headers: this.getHeaders()});
  }

  updateDirCliente(dirCliente: DirCliente) {
    const body = JSON.stringify(dirCliente);
    return this._httpClient.put(`${URL_API}dirCliente/${dirCliente.codigoDireccion}`, body, {headers: this.getHeaders()});
  }

  deleteDirCliente(id: number) {
    return this._httpClient.delete(`${URL_API}dirCliente/${id}`, {headers: this.getHeaders()});
  }

  getHeaders() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'Application/json')
      .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
      return headers;
  }
}
