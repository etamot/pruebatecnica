
import { SlicePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { Hotel } from '@hoteles/interfaces/hotel.interface';
import { HotelImagePipe } from '@hoteles/pipes/hotel-image.pipe';
import { HotelesService } from '@hoteles/services/hoteles.service';

@Component({
  selector: 'hotel-card',
  imports: [RouterLink, HotelImagePipe,SlicePipe],
  templateUrl: './hotel-card.component.html',
})
export class HotelCardComponent {

  hotel = input.required<Hotel>();

  hotelesService = inject(HotelesService);

  ciudadesResource = rxResource({
    request: () => ({ id: this.hotel().ubicacion }),
    loader: ({ request }) => this.hotelesService.getCiudadesById(request.id),
  });
}
