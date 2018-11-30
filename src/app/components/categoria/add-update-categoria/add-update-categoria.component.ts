import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/categoria.interface';
import { NgForm } from '@angular/forms';
import { CategoriaService } from './../../../services/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaComponent} from './../categoria.component';
@Component({
  selector: 'app-add-update-categoria',
  templateUrl: './add-update-categoria.component.html',
  styles: []
})
export class AddUpdateCategoriaComponent implements OnInit {
  categoria: Categoria = {
    codigoCategoria: 0,
    descripcion: ''
  };
  nuevo = false;

  constructor(private _activatedRoute: ActivatedRoute, private _categoriaService: CategoriaService, private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      if (params['id'] > 0) {
        this._categoriaService.getCategoria(params['id']).subscribe((data: any) => {
          this.categoria = data;
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
      this._categoriaService.addCategoria(this.categoria).subscribe(data => {
        console.log(data);
        this._router.navigate(['/categoria']);
      });
    } else {
      this._categoriaService.updateCategoria(this.categoria).subscribe(data => {
        console.log(data);
        this._router.navigate(['/categoria']);
      });
    }
  }
}

