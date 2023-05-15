import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  myObservableProduct!: Observable<any>
  id: number = 1;

  constructor(private productsService: ProductsService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id'])
    });
  }

  ngOnInit() {
    this.myObservableProduct = this.productsService.getOneProduct(this.id);
  }

}
