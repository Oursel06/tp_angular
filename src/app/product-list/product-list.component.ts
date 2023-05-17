import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { SortByDatePipe } from '../pipes/sort-by-date.pipe';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
  })
export class ProductListComponent implements OnInit {

  roducts!: Product[];
  search: string = '';
  nameTriDate : string = 'asc';

  productsObservable!: Observable<any>;
  sortedProducts!: Observable<any>;

  constructor(private sortByDatePipe: SortByDatePipe, private productsService: ProductsService) {}

    triDate(e:any){
    console.log("Tri par la date");
    this.nameTriDate = (e.target.value);
    console.log(e.target.value);
  }

  ngOnInit() {
    // Assume you have a service that retrieves products as an Observable
     this.productsObservable = this.productsService.getAllProducts();

    // Apply the sortByDate pipe to the productsObservable
    this.sortedProducts = this.sortByDatePipe.transform(this.productsObservable, this.nameTriDate);
  }
}

