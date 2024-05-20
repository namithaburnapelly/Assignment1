import { Component, SimpleChange } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CartComponent } from '../cart/cart.component';
import { MenuComponent } from '../menu/menu.component';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    PageNotFoundComponent,
    CartComponent,
    MenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private dataService: DataService) { }

  getLength() {
    return this.dataService.getCartCount();
  }
}
