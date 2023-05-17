import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({ name: 'sortByDate' })
export class SortByDatePipe implements PipeTransform {
  transform(productsObservable: Observable<Product[]>, order?: any): Observable<Product[]> {
    let desc = !(order && order === 'asc');
    return productsObservable.pipe(
      map(products => {
        return products.sort((a, b) => {
          if (desc) {
            return b.dateajout.getTime() - a.dateajout.getTime();
          } else {
            return a.dateajout.getTime() - b.dateajout.getTime();
          }
        });
      })
    );
  }
}