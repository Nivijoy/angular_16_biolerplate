import { Pipe, PipeTransform } from '@angular/core';
import { tax } from '../utils';

@Pipe({
    name: 'tax',
})
export class TaxCalculatorPipe implements PipeTransform {
    transform = tax;
}
