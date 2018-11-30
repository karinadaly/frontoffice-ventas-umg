import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from './../interfaces/usuario.interface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  usuarios: any[] = [];
  loading = false;
  constructor(private _usuarioService: UsuarioService) {
  this.loading = true;
  this._usuarioService.getUsuarios().subscribe( (data: any) => {
    this.usuarios = data;
    this.loading = false;
  });
  }
  eliminar(index: number) {
    const registro = this.usuarios[index];
    this._usuarioService.deleteUsuario(registro.codigoUsuario).subscribe((data) => {
        this.usuarios.splice(index, index + 1);
    });
  }
  ngOnInit() {
  }
}
