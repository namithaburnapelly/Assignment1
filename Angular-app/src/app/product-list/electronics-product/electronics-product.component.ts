import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../ProductData/product';
import { DataService } from '../../Services/data.service';
import { ProductTemplateComponent } from '../../product-template/product-template.component';
import { capitalizeFirstLetter } from '../../ProductData/catergories-data';

@Component({
  selector: 'app-electronics-product',
  standalone: true,
  imports: [ProductTemplateComponent],
  templateUrl: './electronics-product.component.html',
  styleUrl: './electronics-product.component.css'
})
export class ElectronicsProductComponent {

  dataArray: Product[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.url.subscribe(obj => {
      const category = obj[1].path
      this.dataArray = this.dataService.getElectronics().filter(product => product.productSubType === capitalizeFirstLetter(category)).reverse()
    });
  }
}
