import { Injectable } from '@angular/core';
import { URL_API } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categoria } from '../components/interfaces/categoria.interface';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  constructor(private _httpClient: HttpClient) { }

  getCategorias() {
    return this._httpClient.get(`${URL_API}categoria`, { headers: this.getHeaders() });
  }

  getCategoria(id: number) {
    return this._httpClient.get(`${URL_API}categoria/${id}`, { headers: this.getHeaders() });
  }

  addCategoria(categoria: Categoria) {
    const body = JSON.stringify(categoria);
    return this._httpClient.post(`${URL_API}categoria`, body, { headers: this.getHeaders() });
  }

  updateCategoria(categoria: Categoria) {
    const body = JSON.stringify(categoria);
    return this._httpClient.put(`${URL_API}categoria/${categoria.codigoCategoria}`, body, { headers: this.getHeaders() });
  }

  deleteCategoria(id: number) {
    return this._httpClient.delete(`${URL_API}categoria/${id}`, { headers: this.getHeaders() });
  }

  getHeaders() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'Application/json')
      .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
    return headers;
  }
}
