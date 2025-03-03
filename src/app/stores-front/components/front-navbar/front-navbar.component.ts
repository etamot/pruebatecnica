import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HotelesService } from '@hoteles/services/hoteles.service';

@Component({
  selector: 'front-navbar',
  imports: [
    RouterLink, RouterLinkActive
  ],
  templateUrl: './front-navbar.component.html',
})
export class FrontNavbarComponent {


   hotelesService = inject(HotelesService);

      ciudadesResource = rxResource({
          request: () => ({}),
          loader :({ request }) =>{

              return this.hotelesService.getCiudades();
          },
      });
}
