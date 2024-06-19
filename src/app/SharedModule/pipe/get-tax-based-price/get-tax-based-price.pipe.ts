import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getTaxBasedPrice'
})
export class GetTaxBasedPricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
