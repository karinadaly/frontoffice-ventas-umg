import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './../../services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styles: []
})

export class CategoriaComponent implements OnInit {
  categorias: any[] = [];
  loading = false;
  constructor(private _categoriaService: CategoriaService) {
    this.loading = true;
    this._categoriaService.getCategorias().subscribe((data: any) => {
      this.categorias = data;
      this.loading = false;
    });
  }
  eliminar(index: number) {
    const registro = this.categorias[index];
      this._categoriaService.deleteCategoria(registro.codigoCategoria).subscribe((data) => {
      this.categorias.splice(index, index + 1);
    });
  }

  ngOnInit() {
  }

}
