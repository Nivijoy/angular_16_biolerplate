import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsVisibleDirective } from './is-visible/is-visible.directive';

@NgModule({
    declarations: [IsVisibleDirective],
    imports: [CommonModule],
    exports: [IsVisibleDirective],
})
export class IsVisibleModule {}
