import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { DataService } from '../Services/data.service';
import { Product } from '../ProductData/product';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MenuComponent, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {

  cart: Product[] = []

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.cart = this.dataService.getCart()
  }

  checkCartExists() {
    return this.dataService.getCartCount()
  }

  removeFromCart(id: number) {
    console.log(id)
    this.dataService.removeFromCart(id);
  }

}
