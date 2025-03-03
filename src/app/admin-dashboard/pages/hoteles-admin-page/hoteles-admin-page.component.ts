import { Component, inject } from '@angular/core';
import { HotelTableComponent } from "../../../hoteles/components/hotel-table/hotel-table.component";
import { HotelesService } from '@hoteles/services/hoteles.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hoteles-admin-page',
  imports: [HotelTableComponent,RouterLink],
  templateUrl: './hoteles-admin-page.component.html',
})
export class HotelesAdminPageComponent {


  hotelesService = inject(HotelesService);

      hotelesResource = rxResource({
          request: () => ({}),
          loader :({ request }) =>{

              return this.hotelesService.getHoteles({});
          },
      });
}
