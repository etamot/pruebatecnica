import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelImage'
})

export class HotelImagePipe implements PipeTransform {
  transform(value: string | undefined): any {
    if(value != null && value != ''){

      return value;
    }
    else{
      return './assets/images/hotel_placeholder.png';
    }
  }
}
