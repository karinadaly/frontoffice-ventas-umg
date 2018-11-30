import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API } from './../../environments/environment';
import { TipoRegistro } from '../components/interfaces/tipo-registro.interface';

@Injectable({
    providedIn: 'root'
})

export class TipoRegistroService {
    constructor(private _httpClient: HttpClient){ }

    getTipoRegistros(){
        return this._httpClient.get(`${URL_API}tipo-registro`, {headers: this.getHeaders()});
    }

    getTipoRegistro(id: number){
        return this._httpClient.get(`${URL_API}tipo-registro/${id}`, {headers: this.getHeaders()});
    }

    addTipoRegistro(TipoRegistro: TipoRegistro){
        const body = JSON.stringify(TipoRegistro);
        return this._httpClient.post(`${URL_API}tipo-registro`, body, {headers : this.getHeaders()});
    }

    updateTipoRegistro(TipoRegistro: TipoRegistro){
        const body =JSON.stringify(TipoRegistro);
        return this._httpClient.put(`${URL_API}tipo-registro/${TipoRegistro.codigoTipoRegistro}`, body, {headers: this.getHeaders()});
    }

    deleteTipoRegistro(id: number){
        return this._httpClient.delete(`${URL_API}tipo-registro/${id}`, {headers: this.getHeaders()});
    }

    getHeaders() {
        const headers = new HttpHeaders()
          .set('Content-Type', 'Application/json')
          .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
          return headers;
      }
}