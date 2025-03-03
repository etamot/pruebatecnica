import { Routes } from "@angular/router";
import { AdminDashboardLayoutComponent } from "./layouts/admin-dashboard-layout/admin-dashboard-layout.component";
import { HotelAdminPageComponent } from "./pages/hotel-admin-page/hotel-admin-page.component";
import { HotelesAdminPageComponent } from "./pages/hoteles-admin-page/hoteles-admin-page.component";


export const adminDashboardRoutes: Routes = [{
  path: '',
  component: AdminDashboardLayoutComponent,

  children: [{
    path: 'hoteles',
    component: HotelesAdminPageComponent
  },
  {
    path: 'hoteles/:id',
    component: HotelAdminPageComponent
  },
  {
    path: '**',
    redirectTo: 'hoteles',
  }
]

}];

export default adminDashboardRoutes;
