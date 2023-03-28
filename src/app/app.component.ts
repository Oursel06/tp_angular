import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products!: Product[];
  search: string = '';
  title: string = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.products;
    this.search = '';
    this.title = 'Voitures de sport';
  }

}
