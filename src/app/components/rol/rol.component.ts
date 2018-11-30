import { Component, OnInit } from '@angular/core';
import { RolService } from './../../services/rol.service';
import { Rol } from './../interfaces/rol.interface';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: []
})
export class RolComponent implements OnInit {
    roles: any[] = [];
    loading = false;
    constructor(private _rolService: RolService) {
      this.loading = true;
      this._rolService.getRoles().subscribe( (data: any) => {
        this.roles = data;
        this.loading = false;
      });
  }
  eliminar(index: number) {
    const registro = this.roles[index];
    this._rolService.deleteRol(registro.codigoRol).subscribe((data) => {
        this.roles.splice(index, index + 1);
    });
  }
  ngOnInit() {
  }

}

