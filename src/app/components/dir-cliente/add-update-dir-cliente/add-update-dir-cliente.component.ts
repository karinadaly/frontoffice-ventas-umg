import { Component, OnInit } from '@angular/core';
import { DirCliente } from '../../interfaces/dirCliente.interface';
import { NgForm } from '@angular/forms';
import { DirClienteService } from '../../../services/dirCliente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-update-dir-cliente',
  templateUrl: './add-update-dir-cliente.component.html',
  styles: []
})
export class AddUpdateDirClienteComponent implements OnInit {
  dirCliente: DirCliente = {
    codigoDireccion: 0,
    descripcion: '',
    direccion: '',
    codigoCliente: 0
  };
  nuevo = false;
  constructor(private _activatedRoute: ActivatedRoute, private _dirClienteService: DirClienteService, private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      if (params['id'] > 0) {
        this._dirClienteService.getDirCliente(params['id']).subscribe((data: any) => {
          this.dirCliente = data;
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
      this._dirClienteService.addDirCliente(this.dirCliente).subscribe(data => {
        console.log(data);
        this._router.navigate(['/dirCliente']);
      });
    } else {
      this._dirClienteService.updateDirCliente(this.dirCliente).subscribe(data => {
        console.log(data);
        this._router.navigate(['/dirCliente']);
      });
    }
  }
}
