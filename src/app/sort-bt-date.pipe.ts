import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product.model';

@Pipe({
  name: 'sortBtDate'
})
export class SortBtDatePipe implements PipeTransform {
  transform(products: Product[], order?: any) {
    let desc = !(order && order === "asc");
    return products.sort((a, b) => {
      if (desc) return b.dateajout.getTime() - a.dateajout.getTime()
      else return a.dateajout.getTime() - b.dateajout.getTime();
    });
  }
}
