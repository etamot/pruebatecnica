import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontNavbarComponent } from "../../components/front-navbar/front-navbar.component";

@Component({
  selector: 'app-hoteles-layout',
  imports: [
    RouterOutlet,
    FrontNavbarComponent
],
  templateUrl: './hoteles-layout.component.html',
})
export class HotelesLayoutComponent { }
