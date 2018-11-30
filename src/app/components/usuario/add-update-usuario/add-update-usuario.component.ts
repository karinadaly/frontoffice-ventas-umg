import { Component, OnInit } from '@angular/core';
import { Usuario} from '../../interfaces/usuario.interface';
import { Rol } from '../../interfaces/rol.interface';
import { NgForm } from '@angular/forms';
import { UsuarioService } from './../../../services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-add-update-usuario',
  templateUrl: './add-update-usuario.component.html',
  styles: []
})

export class AddUpdateUsuarioComponent implements OnInit {
  roles: any[] = [];
  usuario: Usuario = {
    codigoUsuario: 0,
    email: '',
    nombre: '',
    username: '',
    password: '',
    rol: { codigoRol: 0, descripcion: '', nombre: ''}
  };
  nuevo = false;
  constructor(private _activatedRoute: ActivatedRoute,
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _rolService: RolService) {
    this._activatedRoute.params.subscribe(params => {
      if ( params['id'] > 0) {
        this._usuarioService.getUsuario(params['id']).subscribe((data: any) => {
          console.log('soy data');
          console.log(data);
          this.usuario = data;
        });
      } else {
        this.nuevo = true;
      }
    });
   }

  ngOnInit() {
    this.obtenerRoles();
  }

  obtenerRoles() {
    this._rolService.getRoles().subscribe( (data: any) => {
      this.roles = data;
    });
  }

  async rolChange(event: any): Promise<void> {
    console.log(event);
  }

  guardar() {
    console.log('Entre a guardar');
    if ( this.nuevo ) {
      console.log('entre a nuevo');
      console.log(this.usuario);
       this._usuarioService.addUsuario(this.usuario).subscribe(data => {
        console.log(data);
        this._router.navigate(['/usuario']);
      });
    } else {
      console.log('update');
      console.log(this.usuario);
      this._usuarioService.updateUsuario(this.usuario).subscribe(data => {
        this._router.navigate(['/usuario']);
      });
    }
  }
}
