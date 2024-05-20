import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../ProductData/product';
import { DataService } from '../../Services/data.service';
import { capitalizeFirstLetter } from '../../ProductData/catergories-data';
import { ProductTemplateComponent } from '../../product-template/product-template.component';

@Component({
  selector: 'app-womens-product',
  standalone: true,
  imports: [ProductTemplateComponent],
  templateUrl: './womens-product.component.html',
  styleUrl: './womens-product.component.html'
})
export class WomensProductComponent {

  dataArray: Product[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.url.subscribe(obj => {
      const category = obj[1].path
      this.dataArray = this.dataService.getWomens().filter(product => product.productSubType === capitalizeFirstLetter(category)).reverse()
    });
  }
}
