import { Component, OnInit } from '@angular/core';
import { TipoEmpaqueService } from '../../services/tipo_empaques.service';
import { TipoEmpaque } from './../interfaces/tipo_empaque.interface';


@Component({
  selector: 'app-tipo-empaque',
  templateUrl: './tipo-empaque.component.html',
  styleUrls: []
})
export class TipoEmpaqueComponent implements OnInit {
  tipo_empaque: any[] = [];
  loading = false;
  constructor(private _tipoEmpaqueService: TipoEmpaqueService) {
    this.loading = true;
    this._tipoEmpaqueService.getTipoEmpaques().subscribe( (data: any) => {
      this.tipo_empaque = data;
      this.loading = false;
    });
  }
  eliminar(index: number) {
    const registro = this.tipo_empaque[index];
    this._tipoEmpaqueService.deleteTipoEmpaque(registro.codigoTipoEmpaque).subscribe((data) => {
        this.tipo_empaque.splice(index, index + 1);
    });
  }
  ngOnInit() {
  }

}
