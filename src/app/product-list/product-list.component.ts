import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products!: Product[];
  search: string = '';

  productsObservable!: Observable<any>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {

    this.productsObservable = this.productsService.getAllProducts();
    this.search = '';
  }

}
