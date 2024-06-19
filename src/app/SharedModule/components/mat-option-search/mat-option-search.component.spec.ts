import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatOptionSearchComponent } from './mat-option-search.component';

describe('MatOptionSearchComponent', () => {
  let component: MatOptionSearchComponent;
  let fixture: ComponentFixture<MatOptionSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatOptionSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatOptionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
