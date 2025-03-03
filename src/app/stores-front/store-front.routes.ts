import { HabitacionComponent } from './pages/Habitacion/Habitacion.component';
import { Routes } from "@angular/router";
import { HotelesLayoutComponent } from "./layouts/hoteles-layout/hoteles-layout.component";
import { HomePageComponent } from "./pages/Home-page/Home-page.component";
import { NotFoundComponent } from './pages/NotFound/NotFound.component';
import { HotelesComponent } from './pages/Hoteles/Hoteles.component';
import { CiudadesComponent } from './pages/ciudades/ciudades.component';

export const storeFrontRoutes: Routes = [{
path: '',
component: HotelesLayoutComponent,
children: [

  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'hoteles/:idHot',
    component: HotelesComponent
  },
  {
    path: 'habitacion/:idHab',
    component: HabitacionComponent
  },
  {
    path: 'ciudades/:ciudad',
    component: CiudadesComponent
  },

  {

    path: '**',
    component: NotFoundComponent
  }

],
},

{
  path: '**',
  redirectTo: '',
},
];

export default storeFrontRoutes;
