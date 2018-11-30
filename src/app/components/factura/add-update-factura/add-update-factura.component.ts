import { Component, OnInit } from '@angular/core';
import { Factura } from '../../interfaces/factura.interface';
import { NgForm } from '@angular/forms';
import { FacturaService } from '../../../services/factura.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-update-factura',
  templateUrl: './add-update-factura.component.html',
})
export class AddUpdateFacturaComponent implements OnInit {
  factura: Factura = {
    codigoFactura: 0,
    numeroFactura: 0,
    serie: '',
    fechaFactura: new Date(),
    total: 0,
    detalleFactura: []
  };
  nuevo = false;

  constructor(private _activatedRoute: ActivatedRoute, private _facturaService: FacturaService, private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      if ( params['id'] > 0) {
        this._facturaService.getFactura(params['id']).subscribe((data: any) => {
          this.factura = data;
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
      this._facturaService.addFactura(this.factura).subscribe(data => {
        console.log(data);
        this._router.navigate(['/factura']);
      });
    } else {
      this._facturaService.updateFactura(this.factura).subscribe(data => {
      console.log(data);
      this._router.navigate(['/factura']);
      });
    }
  }
}

