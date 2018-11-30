import { Component, OnInit } from '@angular/core';
import {Producto} from './../interfaces/producto.interface';
import {ProductoService} from './../../services/producto.service';
import { CategoriaComponent } from '../categoria/categoria.component';
import { TipoEmpaqueComponent } from '../tipo-empaque/tipo-empaque.component';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {
  productos: any[] = [];
  loading = false;
  constructor(private _productoService: ProductoService) {
    this.loading = true;
    this._productoService.getProductos().subscribe((data: any) => {
      this.productos = data;
      this.loading = false;
    });
  }
  eliminar(index: number) {
    const registro = this.productos[index];
    this._productoService.deleteProducto(registro.codigoProducto).subscribe((data) => {
        this.productos.splice(index, index + 1);
    });
  }

  ngOnInit() {
  }

}
