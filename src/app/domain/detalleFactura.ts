import { Factura } from "./factura";

import { Usuario } from "./usuario";

export class DetalleFactura {
    public detid?: number;
    public detprecio?: number;
    public detcantidad?: number;
    public detsubtotal?: number;
   
    public usuario?:  Usuario | null;
    public factura?: Factura | null;
}