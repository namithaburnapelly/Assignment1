import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElectronicsProductComponent } from './electronics-product/electronics-product.component';
import { WomensProductComponent } from './womens-product/womens-product.component';
import { MensProductComponent } from './mens-product/mens-product.component';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ElectronicsProductComponent, WomensProductComponent, MensProductComponent, PageNotFoundComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  constructor(private route: ActivatedRoute) { }
  category!: string
  subCategory!: string

  ngOnInit() {
    this.route.url.subscribe(obj => {
      this.category = obj[0].path
    })
  }

}
