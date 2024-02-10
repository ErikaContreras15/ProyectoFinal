import { DetalleFactura } from "./detalleFactura";
import { Usuario } from "./usuario";


export class Factura {
    public cab_id?: number;
    public cab_fecha?: Date;
    public cab_subtotal?: number;
    public cab_iva?: number;
    public cab_total?: number;

    public usuario?: Usuario;
    public detalles?: DetalleFactura[];

}