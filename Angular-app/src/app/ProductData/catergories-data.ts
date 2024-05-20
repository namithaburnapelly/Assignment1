import { Product } from "./product";

export const categories: string[] = ['Electronics', 'Mens', 'Womens'];

export const electronicsSubCategories: string[] = ['Mobiles', 'Mobile accessories', 'Laptops'];
export const mensSubCategories: string[] = ['Footwear', 'Clothing', 'Winter wear', 'Watches'];
export const womenSubCategories: string[] = ['Clothing', 'Ethnic wear', 'Footwear'];

export const electronicsBrands: string[] = ['Samsung', 'Apple', 'Oppo', 'Boat', 'Dell', 'Macbook', 'Hp'];
export const mensBrands: string[] = ['Redtape', 'Jordan', 'Bata', 'HM', 'Woodland', 'Cantabil', 'Fastrack', 'Boat', 'Titan'];
export const womenBrands: string[] = ['Allen Soly', 'Levis', 'Libas', 'Induus', 'Anayna', 'Adidas', 'Bata', 'Jordan'];

export function capitalizeFirstLetter(word: string): string {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export const DataArray: Product[] = [
    {
        id: 1,
        productType: 'Electronics',
        productName: 'Samsung Galaxy S24',
        productPrice: 2467,
        productSubType: 'Mobiles',
        sellerName: 'Samsung',
        productImg: '../assets/bear.jpg'
    },
    {
        id: 2,
        productType: 'Electronics', productName: 'OPPO SUPERVOOC 33W Power Adapter', productPrice: 23.3, productSubType: 'Mobile accessories', sellerName: 'Oppo',
        productImg: '../assets/bear.jpg'
    },
    {
        id: 3,
        productType: 'Electronics', productName: 'Dell Alienware m16 R2', productPrice: 34, productSubType: 'Laptops', sellerName: 'Dell',
        productImg: '../assets/bear.jpg'
    },
    {
        id: 4,
        productType: 'Electronics', productName: 'OPPO Reno10 Pro 5G', productPrice: 23, productSubType: 'Mobiles', sellerName: 'Oppo',
        productImg: '../assets/bear.jpg'
    },
    {
        id: 5,
        productType: 'Mens', productName: 'Red Tape Men Solid Off White Sneakers', productPrice: 234, productSubType: 'Footwear', sellerName: 'Redtape', productImg: '../assets/bear.jpg'
    },
    {
        id: 6,
        productType: 'Mens', productName: 'H&M Men Cotton Regular Fit Worker Trousers', productPrice: 123, productSubType: 'Clothing', sellerName: 'HM',
        productImg: '../assets/bear.jpg'
    },
    {
        id: 7, productType: 'Mens', productName: 'Men H&M Beige Relaxed Fit Overshirt', productPrice: 123, productSubType: 'Clothing', sellerName: 'HM',
        productImg: '../assets/bear.jpg'
    },
    {
        id: 8,
        productType: 'Mens', productName: 'H&M Twill jacket', productPrice: 123, productSubType: 'Clothing', sellerName: 'HM',
        productImg: '../assets/bear.jpg'
    },
    {
        id: 9,
        productType: 'Mens', productName: 'Woodland Black Quilted Jacket for Men', productPrice: 234, productSubType: 'Winter wear', sellerName: 'Woodland', productImg: '../assets/bear.jpg'
    },
    {
        id: 10,
        productType: 'Mens', productName: 'Woodland CHILI RED Hooded Jacket', productPrice: 234, productSubType: 'Winter wear', sellerName: 'Woodland',
        productImg: '../assets/bear.jpg'
    },
    {
        id: 11,
        productType: 'Mens', productName: "Titan Wedding Bandhan Analog Silver Dial Unisex's Watch", productPrice: 445, productSubType: 'Watches', sellerName: 'Titan',
        productImg: '../assets/bear.jpg'
    },
    {
        id: 12,
        productType: 'Mens', productName: "Fastrack Rider Smartwatch", productPrice: 445, productSubType: 'Watches', sellerName: 'Fastrack',
        productImg: '../assets/bear.jpg'
    },
    {
        id: 13,
        productType: 'Womens', productName: 'Women Yoke Design Silk Straight Kurta', productPrice: 546, productSubType: 'Clothing', sellerName: 'Libas',
        productImg: '../assets/bear.jpg'
    },
    {
        id: 14,
        productType: 'Womens', productName: 'Women Buy Pink Printed Cotton Kurta Set', productPrice: 546, productSubType: 'Clothing', sellerName: 'Libas',
        productImg: '../assets/bear.jpg'
    },
    {
        id: 15,
        productType: 'Womens', productName: 'Blue Georgette Embroidered Kurti with Sharara', productPrice: 1200, productSubType: 'Ethnic wear', sellerName: 'Induus',
        productImg: '../assets/bear.jpg'
    },
    {
        id: 16,
        productType: 'Womens', productName: 'Womens Brown Beige Sneaker', productPrice: 345, productSubType: 'Footwear', sellerName: 'Jordan',
        productImg: '../assets/bear.jpg'
    },


]