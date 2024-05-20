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

  electronicsSubCategories = electronicsSubCategories
  mensSubCategories = mensSubCategories
  womenSubCategories = womenSubCategories

  constructor(private router: Router, private route: Router) {
  }

  ngOnInit() {
    this.selectCategory((this.route.url).split('/')[2])
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  navigateToSubCategory(subcategory: string) {
    this.router.navigate([`/${this.selectedCategory.toLowerCase()}`, subcategory.toLowerCase()])
  }

}
