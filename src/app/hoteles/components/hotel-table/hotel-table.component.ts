import { SlicePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hotel } from '@hoteles/interfaces/hotel.interface';
import { HotelImagePipe } from '@hoteles/pipes/hotel-image.pipe';

@Component({
  selector: 'hotel-table',
  imports: [HotelImagePipe, RouterLink,SlicePipe],
  templateUrl: './hotel-table.component.html',
})
export class HotelTableComponent {

  hoteles = input.required<Hotel[]>();
 }
