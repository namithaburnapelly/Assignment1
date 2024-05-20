import { Injectable } from '@angular/core';
import { Product } from '../ProductData/product';
import { DataArray } from '../ProductData/catergories-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataArray: Product[] = DataArray;
  cartArray: Product[] = [
    // {
    //   id: 1,
    //   productImg: "../assets/bear.jpg",
    //   productName: "Samsung Galaxy S24",
    //   productPrice: 2467,
    //   productSubType: "Mobiles",
    //   productType: "Electronics",
    //   sellerName: "Samsung",
    // },
    // {
    //   id: 2,
    //   productImg: "../assets/bear.jpg",
    //   productName: "Samsung Galaxy S24",
    //   productPrice: 2467,
    //   productSubType: "Mobiles",
    //   productType: "Electronics",
    //   sellerName: "Samsung",
    // }
  ];
  constructor() { }

  newProduct(values: Product) {
    const newProduct: Product = {
      id: this.dataArray.length,
      productType: values.productType,
      productName: values.productName,
      productPrice: values.productPrice,
      productSubType: values.productSubType,
      sellerName: values.sellerName,
      productImg: '../assets/bear.jpg',
    }
    this.dataArray.push(newProduct);
    this.updateIds()
    console.log(this.dataArray)
  }

  updateIds() {
    this.dataArray.forEach((product, index) => {
      product.id = index + 1
    })
  }

  getElectronics(): Product[] {
    return this.dataArray.filter(product => product.productType === 'Electronics');
  }

  getMens(): Product[] {
    return this.dataArray.filter(product => product.productType === 'Mens');
  }

  getWomens(): Product[] {
    return this.dataArray.filter(product => product.productType === 'Womens');
  }

  addToCart(index: number) {
    const product = this.dataArray.filter(product => product.id === index)[0]
    this.cartArray.push(product)
    console.log(this.cartArray)
  }

  getCartCount(): number {
    return this.cartArray.length;
  }

  getCart(): Product[] {
    return this.cartArray;
  }

  // removeFromCart(index: number) {
  //   return this.cartArray.splice(index - 1, 1)
  // }
}
