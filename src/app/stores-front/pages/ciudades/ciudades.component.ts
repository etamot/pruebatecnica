import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Ciudad } from '../../../hoteles/interfaces/hotel.interface';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { HotelesService } from '@hoteles/services/hoteles.service';
import { HotelCardComponent } from '@hoteles/components/hotel-card/hotel-card.component';

@Component({
  selector: 'app-ciudades',
  imports: [HotelCardComponent],
  templateUrl: './ciudades.component.html',
})
export class CiudadesComponent { 

    route= inject(ActivatedRoute);

    ciudad = toSignal(

        this.route.params.pipe(
            map(({ ciudad}) => ciudad)
        )
    )

     hotelesService = inject(HotelesService);
    
        hotelesResource = rxResource({
            request: () => ({ciudad: this.ciudad()}),
            loader :({ request }) =>{
    
                return this.hotelesService.getHoteles({
                    ubicacion: request.ciudad
                });
            },
        });

        ciudadesResource = rxResource({
            request: () => ({ id: this.ciudad() }),
            loader: ({ request }) => this.hotelesService.getCiudadesById(request.id),
          });
}
