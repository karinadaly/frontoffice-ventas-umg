import { Component, OnInit } from '@angular/core';
import { DetalleFacturaService } from '../../services/detalle-factura.service';
import { FacturaService } from '../../services/factura.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Factura } from '../interfaces/factura.interface';
import { DetalleFactura } from '../interfaces/detalle-factura.interface';
import { Producto } from '../interfaces/producto.interface';
import { ProductoComponent } from '../producto/producto.component';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html'
})

export class DetalleFacturaComponent implements OnInit {

factura: Factura = {
  codigoFactura: 0,
  numeroFactura: 0,
  serie: '',
  fechaFactura: new Date(),
  total: 0.00,
  detalleFactura: []
};

detalleFactura: any[] = [];
loading = false;
  constructor(private _ActivatedRoute: ActivatedRoute, private _factura: FacturaService,
    private _detalleFacturaService: DetalleFacturaService) {
    this.loading = true;
    this._ActivatedRoute.params.subscribe(params => {
      this._factura.getFactura(params['id']).subscribe((data: any) => {
        console.log(params['id']);
        console.log('Detalle: ' + data);
        this.factura = data;
        this.loading = false;
      });
    });
  }

  ngOnInit() {
  }

  eliminar(index: number) {
    const registro = this.factura.detalleFactura[index];
    this._detalleFacturaService.deleteFactura(registro.codigoFacturaDetalle).subscribe((data)=> {
    this.factura.detalleFactura.splice(index, index + 1);
    });
  }
}
