import { Inject, Injectable } from '@angular/core';
import { ProductoCarrito } from '../model/Carrito.model';
import { IProduct } from '../model/Producto.model';

@Injectable({ providedIn: 'root' })
export class CarritoServices {

  private carrito: ProductoCarrito[] = []

  getCarrito(): ProductoCarrito[] {
    return this.carrito;
  }

  addProduct(id: number, title: string, price: string) {
    this.carrito.push({ id: id, nombreProducto: title, Costo: Number(price), cantidad: 1 })
  }
}