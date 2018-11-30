import { Component, OnInit } from '@angular/core';
import { EmailProveedor } from '../../interfaces/emailProveedor.interface';
import { NgForm } from '@angular/forms';
import { EmailProveedorService } from './../../../services/email-proveedor.service';
import { Proveedor } from '../../interfaces/proveedor.interface';
import { ProveedorService } from '../../../services/proveedor.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-update-emailprov',
  templateUrl: './add-update-emailprov.component.html',
  styles: []
})
export class AddUpdateEmailprovComponent implements OnInit {
  proveedores: any[] = [];
  emailProveedor: EmailProveedor = {
    codigoEmail: 0,
    descripcion: '',
    email: '',
    proveedor: { codigoProveedor: 0, contactoPrincipal: '', nit: 0, paginaWeb: '', razonSocial: ''},
  };
  nuevo = false;
  constructor(private _activatedRoute: ActivatedRoute,
     private _emailprovService: EmailProveedorService,
     private _proveedorService: ProveedorService,
     private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      if ( params['id'] > 0) {
        this._emailprovService.getEmailProveedor(params['id']).subscribe((data: any) => {
          this.emailProveedor = data;
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
      this._emailprovService.addEmailProveedor(this.emailProveedor).subscribe(data => {
        console.log(data);
        this._router.navigate(['/emailprov']);
      });
    } else {
      this._emailprovService.updateEmailProveedor(this.emailProveedor).subscribe(data => {
        console.log(data);
        this._router.navigate(['/emailprov']);
      });
    }
  }

}
