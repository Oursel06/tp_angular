import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  products!: Product[];
  search: string = '';
  title: string = '';

  ngOnInit() {
    this.title = 'DEVYALCARS';
    this.search = '';
  }
}
