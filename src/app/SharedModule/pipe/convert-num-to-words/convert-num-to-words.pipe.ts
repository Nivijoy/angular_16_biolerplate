import { Pipe, PipeTransform } from '@angular/core';
import { convertNumToWords } from '../utils';
@Pipe({
    name: 'convertNumToWords',
})
export class ConvertNumToWordsPipe implements PipeTransform {
    transform = convertNumToWords;
}
