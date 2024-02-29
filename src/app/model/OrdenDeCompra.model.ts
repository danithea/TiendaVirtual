import { Carrito } from "./Carrito.model";
import { DatosDeEnvio } from "./DatosDeEnvio.model";

export interface OrdenDeCompra{
  datosDeEnvio:DatosDeEnvio;
  Carrito:Carrito;
}