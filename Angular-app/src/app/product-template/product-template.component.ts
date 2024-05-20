import { Component, Input } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Product } from '../ProductData/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-template.component.html',
  styleUrl: './productStyle.css'
})
export class ProductTemplateComponent {

  @Input() dataArray!: Product[]

  constructor(private dataService: DataService) { }

  addToCart(index: number) {
    this.dataService.addToCart(index)
  }
}
