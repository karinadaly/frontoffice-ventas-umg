import { Rol } from '../interfaces/rol.interface';
export interface Usuario {
    'codigoUsuario': number ;
    'email': string;
    'nombre': string;
    'username': string;
    'password': string;
    'rol': Rol;
}
