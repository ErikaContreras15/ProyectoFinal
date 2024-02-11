import { Factura } from "./factura";
import { Producto } from "./Producto";
import { Usuario } from "./usuario";

export class DetalleFactura {
    public det_id?: number;
    public det_precio?: number;
    public det_cantidad?: number;
    public det_subtotal?: number;
    public producto?: Producto | null;
    public usuario?:  Usuario | null;
    public factura?: Factura | null;
}

