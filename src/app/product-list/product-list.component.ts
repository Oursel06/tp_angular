import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products!: Product[];
  search: string = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.products;
    this.search = '';
  }

}
