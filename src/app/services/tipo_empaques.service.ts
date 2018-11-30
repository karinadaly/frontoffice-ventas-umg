import { Injectable } from '@angular/core';
import { URL_API } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TipoEmpaque } from '../components/interfaces/tipo_empaque.interface';
@Injectable({
  providedIn: 'root'
})
export class TipoEmpaqueService {
  constructor(private _httpClient: HttpClient) { }

  getTipoEmpaques() {
    return this._httpClient.get(`${URL_API}tipo-empaque`, {headers: this.getHeaders()});
  }

  getTipoEmpaque(id: number) {
    return this._httpClient.get(`${URL_API}tipo-empaque/${id}`, {headers: this.getHeaders()});
  }

  addTipoEmpaque(tipoEmpaque: TipoEmpaque) {
    const body = JSON.stringify(tipoEmpaque);
    return this._httpClient.post(`${URL_API}tipo-empaque`, body, {headers: this.getHeaders()});
  }

  updateTipoEmpaque(tipoEmpaque: TipoEmpaque) {
    const body = JSON.stringify(tipoEmpaque);
    return this._httpClient.put(`${URL_API}tipo-empaque/${tipoEmpaque.codigoTipoEmpaque}`, body, {headers: this.getHeaders()});
  }

  deleteTipoEmpaque(id: number) {
    return this._httpClient.delete(`${URL_API}tipo-empaque/${id}`, {headers: this.getHeaders()});
  }

  getHeaders() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'Application/json')
      .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
      return headers;
  }
}
