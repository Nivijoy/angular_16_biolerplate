import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertHotelComponent } from './upsert-hotel.component';

describe('UpsertHotelComponent', () => {
  let component: UpsertHotelComponent;
  let fixture: ComponentFixture<UpsertHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpsertHotelComponent]
    });
    fixture = TestBed.createComponent(UpsertHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
