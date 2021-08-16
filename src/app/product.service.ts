import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from './cart';
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
  findCartByUserid(userid: number) {
    return this.httpClient.get<Cart>(this.baseUrl + '/cartbyuser/' + userid);
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

  deleteFromCart(productid: number, cartId: number) {
    return this.httpClient.put(
      this.baseUrl + '/' + productid + '/deleteFromCart/' + cartId,
      0
    );
  }

  addNewProduct(product: Product) {
    return this.httpClient.post(this.baseUrl + '/products/addproduct', product);
  }

  getCartById(cartId: number) {
    return this.httpClient.get(this.baseUrl + '/cart/' + cartId);
  }

   //display all by retailer id

  getProductsBySupplier(supplierid:number)
  {
    return this.httpClient.get(
      this.baseUrl + '/products/supplier/' + supplierid
    );
  }

  //delete product by Retailer
  deleteProduct(prodid:number){
    return this.httpClient.delete(this.baseUrl+"/products/deleteproduct/"+prodid);
  }

  updateProduct(prodid:number){
    return this.httpClient.get(this.baseUrl+"/products/updateproduct/"+prodid);
  }

  //get supplier details

  getSupplierDetails(supplierid:number){
    return this.httpClient.get(
      this.baseUrl + '/supplier/' + supplierid
    );

  }
  editproduct(product:Product){
    return this.httpClient.put(this.baseUrl+"/products/editproduct",product);
  }

  // getProductById(
  //   prodid1: number,
  //   prodid2: number,
  //   prodid3: number,
  //   prodid4: number
  // ) {
  //   return this.httpClient.get(
  //     this.baseUrl +
  //       '/products/' +
  //       prodid1 +
  //       '/' +
  //       prodid2 +
  //       '/' +
  //       prodid3 +
  //       '/' +
  //       prodid4
  //   );
  // }

  getSupplierById(supplier_id: number) {
    return this.httpClient.get(this.baseUrl + '/supplier/' + supplier_id);
  }
}
