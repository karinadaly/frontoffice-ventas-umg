import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../interfaces/producto.interface';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  termino: string;
  productos: any[] = [];
  constructor(private _productoService: ProductoService, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
    });
    this._productoService.getProductos(this.termino).subscribe((data: any) => {
      this.productos = data;
    });
   }

  ngOnInit() {

  }

  buscar(termino: string) {
    console.log(termino);
    console.log('Antes' + this.productos);
    this._productoService.getProductos(this.termino).subscribe((data: any) => {
      this.productos = data;
      console.log('Despues: ' + this.productos);
    });
  }


}
