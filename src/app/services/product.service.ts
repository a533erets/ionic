import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { PRODUCTS } from './product.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = PRODUCTS;

  constructor() { }

  getProducts(): Product[] {

    return this.products;

  }

  getProduct(id: number): Product {

    for (let i = 0; i < this.products.length; i++) {

      if (this.products[i].id === id) {

        return this.products[i];

      }

    }

    return null;

  }
}
