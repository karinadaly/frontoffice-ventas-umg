import { Component, OnInit } from '@angular/core';
import { CompraService } from '../../services/compra.service';
import { Categoria } from '../interfaces/categoria.interface';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styles: []
})
export class CompraComponent implements OnInit {
  compras: any[] = [];
  loading = false;
  constructor(private _compraService: CompraService) {
    this.loading = true;
    this._compraService.getCompras().subscribe((data: any) => {
      console.log(data);
      this.compras = data;
      this.loading = false;
    });
  }
  eliminar(index: number) {
    const registro = this.compras[index];
    this._compraService.deleteCompra(registro.numeroDocumento).subscribe((data) => {
      this.compras.splice(index, index + 1);
    });
  }
  ngOnInit() {
  }

}
