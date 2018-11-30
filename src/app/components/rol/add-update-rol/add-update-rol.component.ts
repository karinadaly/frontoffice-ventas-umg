import { Component, OnInit } from '@angular/core';
import { Rol } from '../../interfaces/rol.interface';
import { NgForm } from '@angular/forms';
import { RolService } from './../../../services/rol.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-update-rol',
  templateUrl: './add-update-rol.component.html',
  styleUrls: []
})
export class AddUpdateRolComponent implements OnInit {
  rol: Rol = {
    codigoRol: 0,
    descripcion: '',
    nombre: ''
  };
  nuevo = false;
  constructor(private _activatedRoute: ActivatedRoute, private _rolService: RolService, private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      if ( params['id'] > 0) {
        this._rolService.getRol(params['id']).subscribe((data: any) => {
          this.rol = data;
        });
      } else {
        this.nuevo = true;
      }
    });
   }

  ngOnInit() {
  }

  guardar() {
    console.log('Entre a guardar');
    if ( this.nuevo ) {
      console.log('entre a nuevo');
      this._rolService.addRol(this.rol).subscribe(data => {
        console.log(data);
        this._router.navigate(['/rol']);
      });
    } else {
      console.log('entre a actualizar');
      this._rolService.updateRol(this.rol).subscribe(data => {
        console.log(data);
        this._router.navigate(['/rol']);
      });
    }
  }
}
