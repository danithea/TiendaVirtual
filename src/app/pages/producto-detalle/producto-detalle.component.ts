import { Component, OnInit, inject } from '@angular/core';
import { ProductServices } from './../../api/ProductServices.service';
import { IProduct } from './../../model/Producto.model';
import { ActivatedRoute, } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from '../carrito/carrito.component';
import { CarritoServices } from '../../api/CarritoServices.service';

@Component({
  selector: 'app-productos-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductosDetalleComponent implements OnInit {

  loading: boolean = true;
  public product?: IProduct;

  private _route = inject(ActivatedRoute);
  private _apiService = inject(ProductServices);
  private carritoService = inject(CarritoServices);

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getProduct(params['id']).subscribe((data: IProduct) => {
        this.product = data
        this.loading = false;
      });
    }
    )
  }

  addToCarrito() {
    this.carritoService.addProduct(Number(this.product?.id), String(this.product?.title), String(this.product?.price));
  }

}