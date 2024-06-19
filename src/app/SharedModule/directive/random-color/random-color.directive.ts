import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appRandomColor]'
})
export class RandomColorDirective implements OnInit {
  @Input('appRandomColor') color = '';
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.color = this.getRandomColor();
  }

  getRandomColor() {
    if (this.color) return this.color;
    let color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}
