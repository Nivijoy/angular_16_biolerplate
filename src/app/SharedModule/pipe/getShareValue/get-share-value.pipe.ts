import { Pipe, PipeTransform } from '@angular/core';
import { sharePrize } from '../utils';

@Pipe({
    name: 'sharePrize',
})
export class GetShareValuePipe implements PipeTransform {
    transform = sharePrize;
}
