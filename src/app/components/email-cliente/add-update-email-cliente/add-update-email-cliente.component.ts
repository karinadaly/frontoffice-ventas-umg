import { Component, OnInit } from '@angular/core';
import { EmailCliente } from '../../interfaces/emailCliente.interface';
import { NgForm } from '@angular/forms';
import { EmailClienteService } from './../../../services/emailCliente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-update-email-cliente',
  templateUrl: './add-update-email-cliente.component.html',
  styles: []
})
export class AddUpdateEmailClienteComponent implements OnInit {
  emailCliente: EmailCliente = {
    codigoEmail: 0,
    descripcion: '',
    email: '',
    codigoCliente: 0
  };
  nuevo = false;
  constructor(private _activatedRoute: ActivatedRoute, private _emailClienteService: EmailClienteService, private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      if (params['id'] > 0) {
        this._emailClienteService.getEmailCliente(params['id']).subscribe((data: any) => {
          this.emailCliente = data;
        });
      } else {
        this.nuevo = true;
      }
    });
  }

  ngOnInit() {
  }

  guardar() {
    if (this.nuevo) {
      this._emailClienteService.addEmailCliente(this.emailCliente).subscribe(data => {
        console.log(data);
        this._router.navigate(['/emailCliente']);
      });
    } else {
      this._emailClienteService.updateEmailCliente(this.emailCliente).subscribe(data => {
        console.log(data);
        this._router.navigate(['/emailCliente']);
      });
    }
  }
}
