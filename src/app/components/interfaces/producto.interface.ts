 import { Categoria} from '../../components/interfaces/categoria.interface';
 import { TipoEmpaque } from './tipo_empaque.interface';

export interface Producto {
    'codigoProducto': number;
    'descripcion': string;
    'imagen': string;
    'categoria': Categoria;
    'tipoEmpaque': TipoEmpaque;
}
