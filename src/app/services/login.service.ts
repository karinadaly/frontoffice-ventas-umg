import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { URL_AUT } from './../../environments/environment';
import { User } from '../components/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: Http) { }

  login(user: User) {
    const creds = `grant_type=password&username=${user.username}&password=${user.password}&scope=read`;
    return new Promise((resolve) => {
      this._http.post(`${URL_AUT}`, creds, { headers: this.getHeaders() }).subscribe(data => {
        if (data) {
          window.sessionStorage.setItem('access_token', data.json().access_token);
          window.sessionStorage.setItem('expires_in', data.json().expires_in);
          window.sessionStorage.setItem('refresh_token', data.json().refresh_token);
          window.sessionStorage.setItem('token_type', data.json().token_type);
          window.sessionStorage.setItem('scope', data.json().scope);
          window.sessionStorage.setItem('usuario', JSON.stringify(data));
          resolve(true);
        }
        resolve(false);
      },
        (error) => {
          resolve(error);
        });
    });
  }

  logout() {
    window.sessionStorage.removeItem('access_token');
    window.sessionStorage.removeItem('expires_in');
    window.sessionStorage.removeItem('refresh_token');
    window.sessionStorage.removeItem('token_type');
    window.sessionStorage.removeItem('scope');
    window.sessionStorage.removeItem('usuario');
  }

  getHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('charset', 'utf-8');
    headers.append('Authorization', `Basic U1NJRF9VTUc6c2VjcmV0QHVtZy5hcHA=`);
    return headers;
  }

  getBearerAccess() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'Application/json')
      .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
    return headers;
  }
}
