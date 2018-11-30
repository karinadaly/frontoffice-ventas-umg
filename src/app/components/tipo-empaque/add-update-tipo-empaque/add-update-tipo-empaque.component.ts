import { Component, OnInit } from '@angular/core';
import { TipoEmpaque } from '../../interfaces/tipo_empaque.interface';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoEmpaqueService } from './../../../services/tipo_empaques.service';
@Component({
  selector: 'app-add-update-tipo-empaque',
  templateUrl: './add-update-tipo-empaque.component.html',
  styleUrls: []
})
export class AddUpdateTipoEmpaqueComponent implements OnInit {
  tipoEmpaque: TipoEmpaque = {
    codigoTipoEmpaque: 0,
    descripcion: ''
  };
  nuevo = false;
  constructor(private _activatedRoute: ActivatedRoute, private _TipoEmpaqueService: TipoEmpaqueService, private _route: Router) {
    this._activatedRoute.params.subscribe(params => {
      if (params['id'] > 0) {
        this._TipoEmpaqueService.getTipoEmpaque(params['id']).subscribe((data: any) => {
          this.tipoEmpaque = data;
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
      this._TipoEmpaqueService.addTipoEmpaque(this.tipoEmpaque).subscribe(data => {
        console.log(data);
        this._route.navigate(['/tipo-empaque']);
      });
    } else {
      this._TipoEmpaqueService.updateTipoEmpaque(this.tipoEmpaque).subscribe(data => {
        console.log(data);
        this._route.navigate(['/tipo-empaque']);
      });
    }
  }
}
