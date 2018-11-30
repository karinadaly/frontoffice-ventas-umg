import { Component, OnInit } from '@angular/core';
import { ProveedorService } from './../../services/proveedor.service';
import { Proveedor } from './../interfaces/proveedor.interface';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styles: []
})
export class ProveedorComponent implements OnInit {
  proveedores: any[] = [];
  loading = false;
  constructor(private _proveedorService: ProveedorService) {
    this.loading = true;
    this._proveedorService.getProveedores().subscribe( (data: any) => {
      this.proveedores = data;
      this.loading = false;
    });
  }
  eliminar(index: number) {
    const registro = this.proveedores[index];
    this._proveedorService.deleteProveedor(registro.codigoProveedor).subscribe((data) => {
        this.proveedores.splice(index, index + 1);
    });
  }
  ngOnInit() {
  }

}
