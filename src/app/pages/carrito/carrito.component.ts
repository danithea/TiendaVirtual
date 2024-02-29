import { IProduct } from './../../model/Producto.model';
import { Carrito, ProductoCarrito } from './../../model/Carrito.model';
import { Component, inject } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CarritoServices } from '../../api/CarritoServices.service';



@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [MatTableModule, MatIcon, MatCard],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})



export class CarritoComponent {
  private service = inject(CarritoServices);
  carritoDeCompras: Carrito = {
    CostoTotal: 0,
    productoCarrito: this.service.getCarrito()
  };

  constructor() {
    // Calcular el costo total al inicializar el componente
    this.calcularCostoTotal();
  }

  calcularCostoTotal() {
    // Sumar el costo de cada producto en el carrito
    this.carritoDeCompras.CostoTotal = this.carritoDeCompras.productoCarrito.reduce((total, producto) => {
      return total + producto.Costo * producto.cantidad;
    }, 0);
  }

  eliminarProducto(id: number) {
    // Encuentra el índice del producto con el ID proporcionado
    const index = this.carritoDeCompras.productoCarrito.findIndex(producto => producto.id === id);
    // Si se encuentra el producto
    if (index !== -1) {
      // Elimina el producto del array
      this.carritoDeCompras.productoCarrito.splice(index, 1);
      console.log(`Producto eliminado con ID: ${id}`);
    } else {
      console.log(`No se encontró ningún producto con ID: ${id}`);
    }
  }

  getProductsCarrito(): ProductoCarrito[] {
    return this.carritoDeCompras.productoCarrito;
  }
}