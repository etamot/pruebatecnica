import { Component, effect, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from '../../../app.routes';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { HotelesService } from '@hoteles/services/hoteles.service';
import { HotelDetallesComponent } from "./hotel-detalles/hotel-detalles.component";

@Component({
  selector: 'app-hotel-admin-page',
  imports: [HotelDetallesComponent],
  templateUrl: './hotel-admin-page.component.html',
})
export class HotelAdminPageComponent {

  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)
  hotelService = inject(HotelesService)
  hotelId = toSignal(
    this.activatedRoute.params.pipe(
      map(params => params['id'])
    )
  )

  hotelResource = rxResource({
    request: () => ({ id: this.hotelId()}),
    loader: ({request}) =>{
      return this.hotelService.getHotelById(request.id);
    }
  })

  redirectEffect = effect(() => {
    if( this.hotelResource.error() ){
      this.router.navigate(['./admin/hoteles'])
    }
  })
 }
