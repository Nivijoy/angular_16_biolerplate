import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[isVisible]',
})
export class IsVisibleDirective {
    @Input() set isVisible(isVisible: number | boolean | null | undefined) {
        this.el.nativeElement.style.display = isVisible ? null : 'none';
    }
    constructor(private el: ElementRef) {}
}
