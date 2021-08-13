import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
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
  prodid: number=0;
  prod: Product;
  cartId: number = 1;
  constructor(
    private pservice: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.prod = new Product();
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.prodid = params.data;
    });
    this.pservice.serachProductById(this.prodid).subscribe((data) => {
      this.prod = data as Product;
      console.log(this.prod);
    });

    this.pservice.searchImageById(this.prodid).subscribe((data) => {
      console.log(data as Image);

      this.images = data as Image[];
      this.image = this.images[0].img;
      console.log('images' + this.images);
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
    let data:any=this.cartId;
    this.pservice.addToCart(this.prodid, this.cartId).subscribe((data) => {
      console.log(data);
    });
    this.router.navigate(['showcart'],{
      queryParams:{data:JSON.stringify(this.cartId)}
    })
  }
}
