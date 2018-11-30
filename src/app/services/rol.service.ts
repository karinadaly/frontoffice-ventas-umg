import { Injectable } from '@angular/core';
import { URL_API } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rol } from '../components/interfaces/rol.interface';

@Injectable({
  providedIn: 'root'
})
export class RolService {
    constructor(private _httpClient: HttpClient) { }
    getRoles() {
        return this._httpClient.get(`${URL_API}rol`, {headers: this.getHeaders()});
    }
    getRol(id: number) {
        return this._httpClient.get(`${URL_API}rol/${id}`, {headers: this.getHeaders()});
    }
    addRol(rol: Rol) {
        const body = JSON.stringify(rol);
        return this._httpClient.post(`${URL_API}rol`, body, {headers: this.getHeaders()});
    }
    updateRol(rol: Rol) {
        const body = JSON.stringify(rol);
        return this._httpClient.put(`${URL_API}rol/${rol.codigoRol}`, body, {headers: this.getHeaders()});
    }
    deleteRol(id: number) {
        return this._httpClient.delete(`${URL_API}rol/${id}`, {headers: this.getHeaders()});
    }
    getHeaders() {
        const headers = new HttpHeaders()
          .set('Content-Type', 'Application/json')
          .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
          return headers;
    }
}
