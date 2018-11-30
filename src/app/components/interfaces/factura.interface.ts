import { DetalleFactura } from './detalle-factura.interface';
export interface Factura {
    'codigoFactura': number;
    'numeroFactura': number;
    'serie': string;
    'fechaFactura': Date;
    'total': number;
    'detalleFactura': any[];
}
