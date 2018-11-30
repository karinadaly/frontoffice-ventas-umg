import { Component, OnInit } from '@angular/core';
import { TelClienteService } from './../../services/telCliente.service';
import { TelCliente } from './../interfaces/telCliente.interface';

@Component({
  selector: 'app-tel-cliente',
  templateUrl: './tel-cliente.component.html',
  styles: []
})
export class TelClienteComponent implements OnInit {
  telClientes: any[] = [];
  loading = false;
  constructor(private _TelClienteService: TelClienteService) {
    this.loading = true;
    this._TelClienteService.getTelClientes().subscribe( (data: any) => {
      this.telClientes = data;
      this.loading = false;
    });
  }
  eliminar(index: number) {
    const registro = this.telClientes[index];
    this._TelClienteService.deleteTelCliente(registro.codigoTelefono).subscribe((data) => {
        this.telClientes.splice(index, index + 1);
    });
  }
  ngOnInit() {
  }
}

