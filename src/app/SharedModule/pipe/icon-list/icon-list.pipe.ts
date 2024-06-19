import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconList',
  pure:false
})
export class IconListPipe implements PipeTransform {

  transform(value: any, color: boolean = false): unknown {
    switch (value) {
      case true: case 0: case 1: case 2: case 3:
      {
        return !color ? 'check circle icon' : 'green-icon';
      }
      case false: case -1: {
        return !color ? 'close icon' : 'grey-icon';
      }
      default: {
        return 'default icon'; // ? 
      }
    }
  }

}
