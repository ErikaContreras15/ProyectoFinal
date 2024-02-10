import { DetalleFactura } from "./detalleFactura";
import { Usuario } from "./usuario";


export class Factura {
    public fac_id?: number;
    public fac_fecha?: Date;
    public fac_subtotal?: number;
    public fac_iva?: number;
    public fac_total?: number;

    public usuario?: Usuario;
    public detalles?: DetalleFactura[];

}