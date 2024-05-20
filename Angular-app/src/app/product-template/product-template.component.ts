import { Component, Input } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Product } from '../ProductData/product';
import { CommonModule } from '@angular/common';
import { ToastService } from '../Services/toast.service';
import { Toast } from '../ProductData/toast';

@Component({
  selector: 'app-product-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-template.component.html',
  styleUrl: './productStyle.css'
})
export class ProductTemplateComponent {

  @Input() dataArray!: Product[]
  toasts: Toast[] = []

  constructor(private dataService: DataService, private toastService: ToastService) {
    this.toasts = toastService.toasts
  }

  addToCart(index: number) {
    this.dataService.addToCart(index)
  }

  showToast(product: string) {
    this.toastService.add(`${product} Added to Cart`);
  }
}
