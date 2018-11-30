import { Component, OnInit } from '@angular/core';
import { DirClienteService } from '../../services/dirCliente.service';
import { DirCliente } from '../interfaces/dirCliente.interface';

@Component({
    selector: 'app-dir-cliente',
    templateUrl: './dir-cliente.component.html',
    styles: []
})

export class DirClienteComponent implements OnInit {
  dirClientes: any[] = [];
  loading = false;
  constructor(private _DirClienteService: DirClienteService) {
    this.loading = true;
    this._DirClienteService.getDirClientes().subscribe( (data: any) => {
      this.dirClientes = data;
      this.loading = false;
    });
  }
  eliminar(index: number) {
    const registro = this.dirClientes[index];
    this._DirClienteService.deleteDirCliente(registro.codigoDireccion).subscribe((data) => {
        this.dirClientes.splice(index, index + 1);
    });
  }
  ngOnInit() {
  }
}
