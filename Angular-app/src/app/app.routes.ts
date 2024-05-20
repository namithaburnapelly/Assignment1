import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ElectronicsProductComponent } from './product-list/electronics-product/electronics-product.component';
import { MensProductComponent } from './product-list/mens-product/mens-product.component';
import { WomensProductComponent } from './product-list/womens-product/womens-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'cart', component: CartComponent },
    { path: 'productDetails', component: ProductDetailsComponent },
    { path: ':category/:subcategory', component: ProductListComponent },
    { path: '**', component: PageNotFoundComponent }
];
