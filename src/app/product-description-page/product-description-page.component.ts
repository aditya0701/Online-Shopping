import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Cart } from '../cart';
import { Image } from '../image';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description-page',
  templateUrl: './product-description-page.component.html',
  styleUrls: ['./product-description-page.component.css'],
})
export class ProductDescriptionPageComponent implements OnInit {
  images: any;
  index: number = 0;
  image: string | undefined;
  prodid: number = 1;
  prod: Product;
  userId: number = 1;
  cartId: number = 2;
  cart:Cart;
  constructor(
    private pservice: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.prod = new Product();
    this.cart = new Cart();
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.images = [];
      console.log('params' + params);
      this.prodid = params.data as number;
      console.log('prodid: ' + this.prodid);
      if (this.prodid == undefined) {
        this.prodid = 1;
      }
      this.pservice.serachProductById(this.prodid).subscribe((data) => {
        this.prod = data as Product;
        console.log(this.prod);
      });
      this.userId = parseInt(sessionStorage.getItem('user')!);
      this.pservice.findCartByUserid(this.userId).subscribe((data)=>{
        console.log("Prod desc cart:");
        console.log(data);
        this.cart= data;
        this.cartId = this.cart.cart_id;
        console.log(this.cartId);
      })
    });

    // this.image = this.images[this.index].img;
  }

  goRight() {
    console.log('Right button clicked');
    if (this.index >= this.images.length - 1) {
      this.index = 0;
      this.image = this.images[this.index].img;
      console.log(this.image);
    } else {
      this.index++;
      this.image = this.images[this.index].img;
      console.log(this.image + ' ' + 'index= ' + this.index);
    }
  }
  goLeft() {
    console.log('Left button clicked');
    if (this.index <= 0) {
      this.index = this.images.length - 1;
      this.image = this.images[this.index].img;
      console.log(this.image);
    } else {
      this.index--;
      this.image = this.images[this.index].img;
      console.log(this.image + ' ' + 'index= ' + this.index);
    }
  }

  addToCart() {
    this.pservice.addToCart(this.prodid, this.cartId).subscribe((data) => {
        console.log(data);
      });
      this.router.navigate(['showcart']);
  }
}
