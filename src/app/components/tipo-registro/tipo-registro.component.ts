import { Component, OnInit } from '@angular/core';
import { TipoRegistroService } from 'src/app/services/tipo-registro.service';


@Component({
  selector: 'app-tipo-registro',
  templateUrl: './tipo-registro.component.html',
  styleUrls: []
})
export class TipoRegistroComponent implements OnInit {
  tipoRegistros : any [] = [];
  loading = false;
  constructor(private _TipoRegistroService: TipoRegistroService) { 
    this.loading = true;
    this._TipoRegistroService.getTipoRegistros().subscribe((data: any) => {
      this.tipoRegistros = data;
      this.loading = false;
    });
  }

  eliminar(index: number){
    const registro = this.tipoRegistros[index];
    this._TipoRegistroService.deleteTipoRegistro(registro.codigoTipoRegistro).subscribe((data) => {
      this.tipoRegistros.splice(index, index + 1);
    });
  }


  ngOnInit() {
  }

}
