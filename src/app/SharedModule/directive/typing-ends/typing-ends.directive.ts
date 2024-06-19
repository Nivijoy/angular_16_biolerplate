import {
  Directive,
  EventEmitter,
  Output,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appTypingEnds]'
})
export class TypingEndsDirective {
  timer;

  @Input() interval_time = 1000;
  @Output() typingEnds = new EventEmitter<string>()
  @HostListener('keyup', ['$event']) keyUp = (event: KeyboardEvent) => this.setIdelTimerForUserTyping(event)
  @HostListener('keypress', ['$event']) keyPress = (event: KeyboardEvent) => this.setIdelTimerForUserTyping(event)
  @HostListener('keydown', ['$event']) keyDown = (event: KeyboardEvent)  => this.setIdelTimerForUserTyping(event)

  setIdelTimerForUserTyping(event: any) {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (event.key != 'Enter') {
        this.typingEnds.emit(event.target.value)
      }
    }, this.interval_time)
  }
}
