import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../ProductData/product';
import { DataService } from '../Services/data.service';
import { categories, electronicsSubCategories, mensSubCategories, womenSubCategories, electronicsBrands, mensBrands, womenBrands } from '../ProductData/catergories-data';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule, MenuComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  categories = categories;
  electronicsSubCategories = electronicsSubCategories
  mensSubCategories = mensSubCategories
  womenSubCategories = womenSubCategories
  electronicsBrands = electronicsBrands
  mensBrands = mensBrands
  womenBrands = womenBrands

  selectedCategory!: string;
  selectedSubCategory!: string;
  selectedBrand!: string;

  constructor(private dataService: DataService, private router: Router) { }

  submitData(values: Product, form: NgForm) {
    this.dataService.newProduct(values)
    alert('New product Added Successfully')
    // this.router.navigateByUrl('/')
  }
}
