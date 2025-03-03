import { Component, inject } from '@angular/core';
import { HotelCardComponent } from '@hoteles/components/hotel-card/hotel-card.component';
import { HotelesService } from '../../../hoteles/services/hoteles.service';
import { rxResource } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-home-page',
  imports: [HotelCardComponent],
  templateUrl: './Home-page.component.html',
})
export class HomePageComponent {


    hotelesService = inject(HotelesService);

    hotelesResource = rxResource({
        request: () => ({}),
        loader :({ request }) =>{

            return this.hotelesService.getHoteles({});
        },
    });
 }
