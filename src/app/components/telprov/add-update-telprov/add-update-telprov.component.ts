import { Component, OnInit } from '@angular/core';
import { TelefonoProveedor } from '../../interfaces/telefonoProveedor.interface';
import { NgForm } from '@angular/forms';
import { TelefonoProveedorService } from './../../../services/telefono-proveedor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Proveedor } from '../../interfaces/proveedor.interface';
import { ProveedorService } from '../../../services/proveedor.service';
@Component({
  selector: 'app-add-update-telprov',
  templateUrl: './add-update-telprov.component.html',
  styles: []
})
export class AddUpdateTelprovComponent implements OnInit {
  proveedores: any[] = [];
  telefonoProveedor: TelefonoProveedor = {
    codigoTelefono: 0,
    descripcion: '',
    numeroTelefono: 0,
    proveedor: { codigoProveedor: 0, contactoPrincipal: '', nit: 0, paginaWeb: '', razonSocial: ''},
  };
  nuevo = false;
  constructor(private _activatedRoute: ActivatedRoute,
     private _telprovService: TelefonoProveedorService,
     private _proveedorService: ProveedorService,
     private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      if ( params['id'] > 0) {
        this._telprovService.getTelefonoProveedor(params['id']).subscribe((data: any) => {
          this.telefonoProveedor = data;
        });
      } else {
        this.nuevo = true;
      }
    });
   }
   obtenerProveedores() {
    this._proveedorService.getProveedores().subscribe( (data: any) => {
      this.proveedores = data;
    });
  }
  async proveedorChange(event: any): Promise<void> {
    console.log(event);
  }

  ngOnInit() {
    this.obtenerProveedores();
  }

  guardar() {
    if ( this.nuevo ) {
      this._telprovService.addTelefonoProveedor(this.telefonoProveedor).subscribe(data => {
        console.log(data);
        this._router.navigate(['/telprov']);
      });
    } else {
      this._telprovService.updateTelefonoProveedor(this.telefonoProveedor).subscribe(data => {
        console.log(data);
        this._router.navigate(['/telprov']);
      });
    }
  }

}
