import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../ProductData/product';
import { DataService } from '../../Services/data.service';
import { capitalizeFirstLetter } from '../../ProductData/catergories-data';
import { ProductTemplateComponent } from '../../product-template/product-template.component';

@Component({
  selector: 'app-mens-product',
  standalone: true,
  imports: [ProductTemplateComponent],
  templateUrl: './mens-product.component.html',
  styleUrl: './mens-product.component.css'
})
export class MensProductComponent {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  dataArray: Product[] = [];

  ngOnInit() {
    this.route.url.subscribe(obj => {
      const category = obj[1].path
      this.dataArray = this.dataService.getMens().filter(product => product.productSubType === capitalizeFirstLetter(category)).reverse()
    });
  }
}
