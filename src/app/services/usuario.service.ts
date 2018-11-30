import { Injectable } from '@angular/core';
import { URL_API } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../components/interfaces/usuario.interface';

@Injectable({
    providedIn: 'root'
  })
  export class UsuarioService {
    constructor(private _httpClient: HttpClient) { }
    getUsuarios() {
      return this._httpClient.get(`${URL_API}usuario`, {headers: this.getHeaders()});
    }
    getUsuario(id: number) {
      return this._httpClient.get(`${URL_API}usuario/${id}`, {headers: this.getHeaders()});
    }
    addUsuario(usuario: Usuario) {
        const body = JSON.stringify(usuario);
        return this._httpClient.post(`${URL_API}usuario`, body, {headers: this.getHeaders()});
    }
    updateUsuario(usuario: Usuario) {
        const body = JSON.stringify(usuario);
        console.log('body');
        console.log(body);
        return this._httpClient.put(`${URL_API}usuario/${usuario.codigoUsuario}`, body, {headers: this.getHeaders()});
    }
    deleteUsuario(id: number) {
        return this._httpClient.delete(`${URL_API}usuario/${id}`, {headers: this.getHeaders()});
    }
    getHeaders() {
        const headers = new HttpHeaders()
          .set('Content-Type', 'Application/json')
          .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
          return headers;
    }
}
