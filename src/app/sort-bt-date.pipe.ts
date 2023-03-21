import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product.model';

@Pipe({
  name: 'sortBtDate'
})
export class SortBtDatePipe implements PipeTransform {
  transform(products: Product[]): any {
    return products.sort((a, b) => { return b.dateajout.getTime() - a.dateajout.getTime() });
  }

}
