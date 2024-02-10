
import { DetalleFactura } from "./detalleFactura";

export class Producto {
    public pro_id?: number;
    public pro_nombre?: string;
    public pro_descripcion?: string;
    public pro_precio?: number;
    public pro_iva?: number;

    public detalleFactura?: DetalleFactura[];
}




