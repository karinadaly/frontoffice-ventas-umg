import { Component, OnInit } from '@angular/core';
import { DireccionProveedorService } from '../../services/direccion-proveedor.service';
import { DireccionProveedor } from './../interfaces/direccionProveedor.interface';
import { Proveedor } from '../interfaces/proveedor.interface';
import { ProveedorComponent } from '../proveedor/proveedor.component';

@Component({
  selector: 'app-dirprov',
  templateUrl: './dirprov.component.html',
  styleUrls: []
})
export class DirprovComponent implements OnInit {
  direccionProveedores: any[] = [];
  loading = false;
  constructor(private _direccionProveedorService: DireccionProveedorService) {
    this.loading = true;
    this._direccionProveedorService.getDireccionProveedores().subscribe( (data: any) => {
      this.direccionProveedores = data;
      this.loading = false;
    });
  }
  eliminar(index: number) {
    const registro = this.direccionProveedores[index];
    this._direccionProveedorService.deleteDireccionProveedor(registro.codigoDireccion).subscribe((data) => {
        this.direccionProveedores.splice(index, index + 1);
    });
  }
  ngOnInit() {
  }


}
