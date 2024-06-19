import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { accomodation_setting } from 'src/app/utils/constant';

@Component({
  selector: 'app-upsert-hotel',
  templateUrl: './upsert-hotel.component.html',
  styleUrls: ['./upsert-hotel.component.scss'],
})
export class UpsertHotelComponent implements OnInit {
  isLinear = true;
  accomodation_setting = accomodation_setting;

  ngOnInit(): void {
    console.log('Upsert-hotel Page');
  }


}
