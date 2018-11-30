import { Proveedor } from '../../components/interfaces/proveedor.interface';

export interface DireccionProveedor {
    'codigoDireccion': number;
    'descripcion': string;
    'direccion': string;
    'proveedor': Proveedor;
}
