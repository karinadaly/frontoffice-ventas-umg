import { Component, OnInit } from '@angular/core';
import { DetalleCompraService } from '../../services/detalle-compra.service';

@Component({
  selector: 'app-detalle-compra',
  templateUrl: './detalle-compra.component.html',
  styles: []
})
export class DetalleCompraComponent implements OnInit {
  detalleCompras: any[] = [];
  loading = false;
  constructor(private _detalleCompraService: DetalleCompraService) {
    this.loading = true;
    this._detalleCompraService.getDetalleCompras().subscribe((data: any) => {
      this.detalleCompras = data;
      this.loading = false;
    });
  }
  eliminar(index: number) {
    const registro = this.detalleCompras[index];
    this._detalleCompraService.deleteDetalleCompra(registro.codigoDetalleCompra).subscribe((data) => {
      this.detalleCompras.splice(index, index + 1);
    });
  }
  ngOnInit() {
  }

}
