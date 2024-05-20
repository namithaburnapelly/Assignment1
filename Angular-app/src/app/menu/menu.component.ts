import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { electronicsSubCategories, mensSubCategories, womenSubCategories } from '../ProductData/catergories-data';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  selectedCategory!: string;
  viewDiv: boolean = false

  electronicsSubCategories = electronicsSubCategories
  mensSubCategories = mensSubCategories
  womenSubCategories = womenSubCategories

  selectedSubCategories: string[] = []

  constructor(private router: Router) {
  }

  selectCategory(category: string) {

    if (category === 'electronics') {
      this.selectedSubCategories = electronicsSubCategories
    }
    if (category == 'mens') {
      this.selectedSubCategories = mensSubCategories
    }
    if (category === 'womens') {
      this.selectedSubCategories = womenSubCategories
    }

    this.selectedCategory = category
    this.viewDiv = !this.viewDiv

  }

  navigateToSubCategory(subcategory: string) {
    this.router.navigate([`/${this.selectedCategory.toLowerCase()}`, subcategory.toLowerCase()])
  }

}
