import { Component, OnInit } from '@angular/core';
import { TelefonoProveedorService } from '../../services/telefono-proveedor.service';
import { TelefonoProveedor } from './../interfaces/telefonoProveedor.interface';
@Component({
  selector: 'app-telprov',
  templateUrl: './telprov.component.html',
  styles: []
})
export class TelprovComponent implements OnInit {

  telefonoProveedores: any[] = [];
  loading = false;
  constructor(private _telefonoProveedorService: TelefonoProveedorService) {
    this.loading = true;
    this._telefonoProveedorService.getTelefonoProveedores().subscribe( (data: any) => {
      this.telefonoProveedores = data;
      this.loading = false;
    });
  }
  eliminar(index: number) {
    const registro = this.telefonoProveedores[index];
    this._telefonoProveedorService.deleteTelefonoProveedor(registro.codigoTelefono).subscribe((data) => {
        this.telefonoProveedores.splice(index, index + 1);
    });
  }
  ngOnInit() {
  }



}
