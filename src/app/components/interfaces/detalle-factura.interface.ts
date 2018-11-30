import { Producto } from './producto.interface';
export interface DetalleFactura {
    'codigoFacturaDetalle': number;
    'precio': number;
    'cantidad': number;
    'subTotal': number;
    'producto': Producto;
}
