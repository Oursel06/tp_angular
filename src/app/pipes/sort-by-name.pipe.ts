import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements PipeTransform {

  transform(products: Product[], name?: any): any {
    if (name != "") {
      return products.filter(function (item) { return item.title.toLowerCase().indexOf(name) >= 0 });
    } else {
      return products
    }
  }
}
