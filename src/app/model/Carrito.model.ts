export interface Carrito {
  CostoTotal: number;
  productoCarrito: ProductoCarrito[];
}

export interface ProductoCarrito {
  id: number;
  nombreProducto: string;
  Costo: number;
  cantidad: number;
}