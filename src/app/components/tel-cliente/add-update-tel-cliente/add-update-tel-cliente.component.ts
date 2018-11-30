import { Component, OnInit } from '@angular/core';
import { DirCliente } from '../../interfaces/dirCliente.interface';
import { NgForm } from '@angular/forms';
import { TelClienteService } from './../../../services/telCliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TelCliente } from '../../interfaces/telCliente.interface';

@Component({
  selector: 'app-add-update-tel-cliente',
  templateUrl: './add-update-tel-cliente.component.html',
  styles: []
})
export class AddUpdateTelClienteComponent implements OnInit {
  telCliente: TelCliente = {
    codigoTelefono: 0,
    descripcion: '',
    numeroTelefono: 0,
    codigoCliente: 0
  };
  nuevo = false;
  constructor(private _activatedRoute: ActivatedRoute, private _telClienteService: TelClienteService, private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      if (params['id'] > 0) {
        this._telClienteService.getTelCliente(params['id']).subscribe((data: any) => {
          this.telCliente = data;
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
      this._telClienteService.addTelCliente(this.telCliente).subscribe(data => {
        console.log(data);
        this._router.navigate(['/telCliente']);
      });
    } else {
      this._telClienteService.updateTelCliente(this.telCliente).subscribe(data => {
        console.log(data);
        this._router.navigate(['/telCliente']);
      });
    }
  }
}
