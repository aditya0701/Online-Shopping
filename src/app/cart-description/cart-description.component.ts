import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';
import { Image } from '../image';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart-description',
  templateUrl: './cart-description.component.html',
  styleUrls: ['./cart-description.component.css'],
})
export class CartDescriptionComponent implements OnInit {
  cart: Cart;
  cartId: number = 1;
  totalPrice: number = 0;
  prod = new Array<Product>();
  images = new Array<Image>();
  image = new Array<String>();

  constructor(
    private pservice: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.cart = new Cart();
  }
  ngOnInit(): void {
    //get cart details including products
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.cartId = params.data;
      if (this.cartId == undefined) {
        this.cartId = 2;
      }
    });
    
    this.image=[];
    this.pservice.getCartById(this.cartId).subscribe((data) => {
      this.cart = data as Cart;
      this.prod = this.cart.addedProduct as Product[];
      console.log(this.prod);

      for (var index in this.prod) {
        this.pservice
          .searchImageById(this.prod[index].prodid)
          .subscribe((data) => {
            this.images = data as Image[];
            this.image.push(this.images[0].img);
          });
      }
      console.log(this.image);
      for (var index in this.prod) {
        console.log(this.prod[index].price); // prints elements: 10, 20, 30, 40
        this.addToTotal(this.prod[index].price);
      }
    });
  }

  addToTotal(price: number) {
    this.totalPrice += price;
  }

  deleteProduct(prodid:number){
    console.log("Delete Clicked Product id:"+prodid);
    
    this.pservice.deleteFromCart(prodid, this.cartId).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }
}
