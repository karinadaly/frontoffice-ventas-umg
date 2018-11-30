import { Component, OnInit } from '@angular/core';
import { ClienteService } from './../../services/cliente.service';
import { Cliente } from './../interfaces/cliente.interface';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
    selector: 'app-cliente',
    templateUrl: './cliente.component.html',
    styles: []
})

export class ClienteComponent implements OnInit {
  clientes: any[] = [];
  loading = false;
  constructor(private _clienteService: ClienteService) {
    this.loading = true;
    this._clienteService.getClientes().subscribe( (data: any) => {
      this.clientes = data;
      this.loading = false;
    });
  }
  eliminar(index: number) {
    const registro = this.clientes[index];
    this._clienteService.deleteCliente(registro.codigocliente).subscribe((data) => {
        this.clientes.splice(index, index + 1);
    });
  }
  ngOnInit() {
  }

}
