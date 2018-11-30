import { DetalleCompra } from '../../interfaces/detalle-compra.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DetalleCompraService } from '../../../services/detalle-compra.service';

@Component({
  selector: 'app-add-update-detalle-compra',
  templateUrl: './add-update-detalle-compra.component.html',
  styles: []
})
export class AddUpdateDetalleCompraComponent implements OnInit {
  detalleCompra: DetalleCompra = {
    codigoDetalleCompra: 0,
    cantidad: 0,
    precio: 0,
    subTotal: 0,
    producto: null
  };
  nuevo = false;
  constructor(private _activatedRoute: ActivatedRoute, private _detalleCompraService: DetalleCompraService, private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      if (params['id'] > 0) {
        this._detalleCompraService.getDetalleCompra(params['id']).subscribe((data: any) => {
          this.detalleCompra = data;
        });
      } else {
        this.nuevo = true;
      }
    });
  }

  ngOnInit() {
  }

  guardar() {
    if (this.nuevo) {
      this._detalleCompraService.addDetalleCompra(this.detalleCompra).subscribe(data => {
        console.log(data);
        this._router.navigate(['/detalle-compra']);
      });
    } else {
      this._detalleCompraService.updateDetalleCompra(this.detalleCompra).subscribe(data => {
        console.log(data);
      });
    }
  }
}
