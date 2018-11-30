import { Injectable } from '@angular/core';
import { URL_API } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../components/interfaces/producto.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _httpClient: HttpClient) { }

  getProductos(termino?: string) {
    if (termino) {
      return this._httpClient.get(`${URL_API}producto?termino=${termino}`, {headers: this.getHeaders()});
    } else {
      return this._httpClient.get(`${URL_API}producto`, {headers: this.getHeaders()});
    }
  }

  getProducto(id: number) {
    return this._httpClient.get(`${URL_API}producto/${id}`, {headers: this.getHeaders()});
  }

  addProducto(producto: Producto) {
    const BODY = JSON.stringify(producto);
    return this._httpClient.post(`${URL_API}producto`, BODY, {headers: this.getHeaders()});
  }

  updateProducto(producto: Producto) {
    const BODY = JSON.stringify(producto);
    return this._httpClient.put(`${URL_API}producto/${producto.codigoProducto}`, BODY, {headers: this.getHeaders()});
  }
  deleteProducto(id: number) {
    return this._httpClient.delete(`${URL_API}producto/${id}`, {headers: this.getHeaders()});
  }

  getHeaders() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'Application/json')
      .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
      return headers;
  }
}
