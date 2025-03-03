import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelesService } from '../../../hoteles/services/hoteles.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { SlicePipe } from '@angular/common';
import { HotelImagePipe } from '@hoteles/pipes/hotel-image.pipe';

@Component({
  selector: 'app-hoteles',
  imports: [HotelImagePipe],
  templateUrl: './Hoteles.component.html',
})
export class HotelesComponent { 

    activatedRoute = inject(ActivatedRoute);
    hotelesService = inject(HotelesService);

    hotelId = this.activatedRoute.snapshot.params['idHot'];
    
    hotelResource = rxResource({
        request: () => ({ hotelId: this.hotelId}),
        loader: ({ request }) =>{
            return this.hotelesService.getHotelById(request.hotelId);
        },
    });
}
