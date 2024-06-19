import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { MatLegacyCheckboxChange as MatCheckboxChange } from '@angular/material/legacy-checkbox';
import { MatLegacySelect as MatSelect } from '@angular/material/legacy-select';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mat-option-search',
  templateUrl: './mat-option-search.component.html',
  styleUrls: ['./mat-option-search.component.scss'],
})
export class MatOptionSearchComponent implements OnInit, OnDestroy {
  @ViewChild('autoCompleteSelect') autoCompleteSelect!: ElementRef;
  @Input() placeholder: string = 'Search';
  @Input() color: string = 'primary';
  @Input() manualSearch: boolean = false;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  searchTxt: string = '';
  multiple: boolean = false;
  selectAll: boolean = false;
  isFocusNeeded: boolean = true;

  openChangeSubscribe: Subscription;
  selectionChangeSubscribe: Subscription;

  constructor(@Inject(MatSelect) public matSelect: MatSelect) {
    this.openChangeSubscribe = this.matSelect.openedChange.subscribe((isOpen) => {
      this.multiple = this.matSelect.multiple;
      isOpen
        ? this.focusSearch()
        : this.isFocusNeeded = true;
    });
    this.matSelect._elementRef.nativeElement.addEventListener('focus', () => this.openPanel());
    this.selectionChangeSubscribe = this.matSelect.selectionChange.subscribe(() => {
       if (this.matSelect.multiple) {
        this.focusSearch();
      }
    });
  }

  ngOnInit(): void { }

  focusSearch() {
    this.autoCompleteSelect.nativeElement.focus();
  }

  openPanel() {
    this.isFocusNeeded && this.matSelect.open();
    this.isFocusNeeded = false;
  }

  toggle(event: MatCheckboxChange) {
    this.toggleSelectAll(event.checked)
  }

  toggleSelectAll(checked) {
    if (!this.multiple) return;
    const { control, value: control_value } = this.matSelect.ngControl;
    if (checked) {
      const value = this.matSelect.options.map((opt) => opt.value);
      control?.setValue(
        Array.from(new Set([...value, ...(control_value || [])]))
      );
    } else {
      control?.setValue([]);
    }
    this.focusSearch();
  }

  preventEvent(event: MouseEvent | Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  keyDownSpace(event: Event) {
    this.selectAll = !this.selectAll;
    this.toggleSelectAll(this.selectAll);
    this.preventEvent(event)
  }

  keyUp(event: KeyboardEvent) {
    if (!['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Space'].includes(event?.code)) {
      if (this.manualSearch) {
        this.search.emit(this.searchTxt);
      } else {
        this.matSelect.options.forEach((opt) => {
          const label = opt.getLabel();
          if (label.toLowerCase().includes(this.searchTxt.toLowerCase())) {
            opt._getHostElement().style.display = 'flex'
          } else {
            opt._getHostElement().style.display = 'none'
          }
        })
      }
    }
  }

  ngOnDestroy(): void {
    this.openChangeSubscribe.unsubscribe();
    this.selectionChangeSubscribe.unsubscribe();
    this.matSelect._elementRef.nativeElement.removeEventListener('focus', () => this.openPanel());
  }
}
