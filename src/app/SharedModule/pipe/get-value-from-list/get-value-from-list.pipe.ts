import { Pipe, PipeTransform } from '@angular/core';
import { getValueFromList } from '../utils';

@Pipe({
    name: 'getValueFromList'
})
export class GetValueFromListPipe implements PipeTransform {
    transform=getValueFromList;
}
