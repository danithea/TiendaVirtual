import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductServices } from '../../api/ProductServices.service';
import { IProduct } from '../../model/Producto.model';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent  implements OnInit {

  productList: IProduct[] = []
  private _apiService = inject(ProductServices);
  private _router = inject(Router);

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProduct[]) => {
      this.productList = data;
    }
    );
  }

  navegate(id: number): void {
    this._router.navigate(['/productos', id]);
  }
}