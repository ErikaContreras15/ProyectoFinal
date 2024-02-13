import { DetalleFactura } from "./detalleFactura";
import { Pago } from "./pago";
export class Factura {
    public fac_id?: number;
    public fac_fecha?: Date;
    public fac_subtotal?: number;
    public fac_iva?: number;
    public fac_total?: number;

    public pago?: Pago;
    public detalles?: DetalleFactura[];
}