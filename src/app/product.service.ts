import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  baseUrl: string = 'http://localhost:9797/product/api';

  serachProductById(productid: number) {
    return this.httpClient.get(this.baseUrl + '/products/' + productid);
  }

  getAllProducts() {
    return this.httpClient.get(this.baseUrl + '/products/all');
  }
  searchImageById(productid: number) {
    return this.httpClient.get(
      this.baseUrl + '/products/' + 'images/' + productid
    );
  }
  findByCategory(category: string) {
    return this.httpClient.get<Product[]>(
      this.baseUrl + '/productsbycategory/' + category
    ); //url
  }

  findByName(name: string) {
    return this.httpClient.get<Product[]>(
      this.baseUrl + '/productsbyname/' + name
    ); //url
  }

  findByBrand(brand: string) {
    return this.httpClient.get<Product[]>(
      this.baseUrl + '/productsbybrand/' + brand
    );
  }

  findProductByPrice(lower: number, upper: number) {
    return this.httpClient.get<Product[]>(
      this.baseUrl + '/findProductByPrice/' + lower + '/' + upper
    ); //url
  }
  addToCart(productid: number, cartId: number) {
    return this.httpClient.put(
      this.baseUrl + '/' + productid + '/cart/' + cartId,
      0
    );
  }

  getCartById(cartId: number) {
    return this.httpClient.get(this.baseUrl + '/cart/' + cartId);
  }
}
