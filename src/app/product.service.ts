import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  baseUrl: string = 'http://localhost:9797/product/api';

  serachProductById(productid: number) {
    return this.httpClient.get(this.baseUrl + '/products/' + productid);
  }
}