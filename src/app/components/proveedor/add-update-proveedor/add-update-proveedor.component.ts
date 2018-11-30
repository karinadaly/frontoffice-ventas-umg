import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../interfaces/proveedor.interface';
import { NgForm } from '@angular/forms';
import { ProveedorService } from './../../../services/proveedor.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-update-proveedor',
  templateUrl: './add-update-proveedor.component.html',
  styles: []
})
export class AddUpdateProveedorComponent implements OnInit {
  proveedor: Proveedor = {
    codigoProveedor: 0,
    contactoPrincipal: '',
    nit: 0,
    paginaWeb: '',
    razonSocial: ''
  };
  nuevo = false;
  constructor(private _activatedRoute: ActivatedRoute, private _proveedorService: ProveedorService, private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      if ( params['id'] > 0) {
        this._proveedorService.getProveedor(params['id']).subscribe((data: any) => {
          this.proveedor = data;
        });
      } else {
        this.nuevo = true;
      }
    });
   }

  ngOnInit() {
  }

  guardar() {
    if ( this.nuevo ) {
      this._proveedorService.addProveedor(this.proveedor).subscribe(data => {
        console.log(data);
        this._router.navigate(['/proveedor']);
        console.log(this.nuevo);
      });
    } else {
      this._proveedorService.updateProveedor(this.proveedor).subscribe(data => {
        console.log(data);
        this._router.navigate(['/proveedor']);
        console.log(this.nuevo);
      });
    }
  }
}
