import { Pipe, PipeTransform } from '@angular/core';
import { findDiffPercentage } from "../utils";
@Pipe({
    name: 'findDiffPercentage',
})
export class FindDiffPercentagePipe implements PipeTransform {
    transform = findDiffPercentage;
}
