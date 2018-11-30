import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { LoginService } from './../../services/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  user: User = {
    username: '',
    password: ''
  };

  constructor(private _loginService: LoginService, private _router: Router) { }

  ngOnInit() {
  }

  public login() {
     this._loginService.login(this.user).then(result => {
       if (result === true) {
        window.location.reload();
        this._router.navigateByUrl('/home');
       } else {
         this._router.navigateByUrl('/login');
       }
     });
  }

}
