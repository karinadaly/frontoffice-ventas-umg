import { Proveedor } from '../../components/interfaces/proveedor.interface';
export interface EmailProveedor {
    'codigoEmail': number;
    'descripcion': string;
    'email': string;
    'proveedor': Proveedor;
}
