import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  myproduct!: Product;
  id: number = 1;

constructor( private productsService:ProductsService, private route: ActivatedRoute ) { 
  this.route.params.subscribe(params => {
    this.id = parseInt(params['id'])
  });
}

ngOnInit() {
  this.myproduct=this.productsService.getOneProduct(this.id);
}

}
