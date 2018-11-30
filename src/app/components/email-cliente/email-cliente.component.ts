import { Component, OnInit } from '@angular/core';
import { EmailClienteService } from './../../services/emailCliente.service';
import { EmailCliente } from './../interfaces/emailCliente.interface';

@Component({
  selector: 'app-email-cliente',
  templateUrl: './email-cliente.component.html',
  styles: []
})
export class EmailClienteComponent implements OnInit {
  emailClientes: any[] = [];
  loading = false;
  constructor(private _EmailClienteService: EmailClienteService) {
    this.loading = true;
    this._EmailClienteService.getEmailClientes().subscribe( (data: any) => {
      this.emailClientes = data;
      this.loading = false;
    });
  }
  eliminar(index: number) {
    const registro = this.emailClientes[index];
    this._EmailClienteService.deleteEmailCliente(registro.codigoEmail).subscribe((data) => {
        this.emailClientes.splice(index, index + 1);
    });
  }
  ngOnInit() {
  }
}
