import { Component, OnInit } from '@angular/core';
import { TipoRegistro } from '../../interfaces/tipo-registro.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoRegistroService } from '../../../services/tipo-registro.service';

@Component({
  selector: 'app-add-update-tipo-registro',
  templateUrl: './add-update-tipo-registro.component.html',
  styleUrls: []
})
export class AddUpdateTipoRegistroComponent implements OnInit {
  tipoRegistro: TipoRegistro = {
    codigoTipoRegistro: 0,
    descripcion: ''
  }
  nuevo = false;
  constructor(private _activatedRoute: ActivatedRoute, private _TipoRegistroService: TipoRegistroService, private _route : Router) { 
    this._activatedRoute.params.subscribe(params => {
      if (params['id'] > 0){
        this._TipoRegistroService.getTipoRegistro(params['id']).subscribe((data: any) =>{
          this.tipoRegistro = data;
        });
      } else {
        this.nuevo = true;
      }
    })
  }

  ngOnInit() {
  }

  guardar(){
    if (this.nuevo){
      this._TipoRegistroService.addTipoRegistro(this.tipoRegistro).subscribe(data => {
        console.log(data);
        this._route.navigate(['/tipo-registro']);
      });
    } else {
      this._TipoRegistroService.updateTipoRegistro(this.tipoRegistro).subscribe(data => {
        console.log(data);
        this._route.navigate(['/tipo-registro']);
      })
    }
  }

}
