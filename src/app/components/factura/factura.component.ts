import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../../services/factura.service';
import { Factura } from '../interfaces/factura.interface';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html'
})

export class FacturaComponent implements OnInit {
  facturas: any[] = [];
  loading = false;
  constructor(private _facturaService: FacturaService) {
    this.loading = true;
    this._facturaService.getFacturas().subscribe((data: any) => {
      console.log(data);
      this.facturas = data;
      this.loading = false;
    });
  }

  eliminar(index: number) {
    const registro = this.facturas[index];
    this._facturaService.deleteFactura(registro.codigoFactura).subscribe((data) => {
      this.facturas.splice(index, index + 1);
    });
  }

  ngOnInit() {
  }

}
