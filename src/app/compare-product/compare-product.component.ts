import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Image } from '../image';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';

@Component({
  selector: 'app-compare-product',
  templateUrl: './compare-product.component.html',
  styleUrls: ['./compare-product.component.css'],
})
export class CompareProductComponent implements OnInit {
  // prodid1: number = 1;
  // prodid2: number = 2;
  // prodid3: number = 4;
  // prodid4: number = 5;
  prodids = new Array<number>();
  products = new Array<Product>();
  prod: Product;
  cartId: number = 3;
  userId: number = 1;
  images = new Array<Image>();
  image = new Array<String>();

  // arrayOfKeys: any = ['ProdId', '', '', '', '', '', '', ''];

  constructor(
    private pService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.prod = new Product();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params.data);
      // this.prodid1 = params.data[0];
      // this.prodid2 = params.data[1];
      // this.prodid3 = params.data[2];
      // this.prodid4 = params.data[3];
      if (params.data == undefined) this.prodids = [1, 2, 3, 4];
      for (var index in params.data) {
        this.prodids.push(params.data[index] as number);
      }
      // console.log("prodids "+ this.prodids);
    });
    // this.pService
    //   .getProductById(this.prodid1, this.prodid2, this.prodid3, this.prodid4)
    //   .subscribe((data) => {
    //     console.log(data);
    //     this.prod = data as Product[];
    //     this.image = [];
    //     for (var index in this.prod) {
    //       this.pService
    //         .searchImageById(this.prod[index].prodid)
    //         .subscribe((data) => {
    //           if (data == null || data === 0) {
    //             this.images = [];
    //             this.image = [];
    //             console.log('Empty image' + this.image);
    //           } else {
    //             this.images = data as Image[];
    //             this.image.push(this.images[0].img);
    //             console.log('img Found' + this.image);
    //           }
    //         });
    //     }
    //   });

    for (var index in this.prodids) {
      this.pService.serachProductById(this.prodids[index]).subscribe((data) => {
        this.products.push(data as Product);
        this.prod = data as Product;
        console.log(('products ' + this.prod) as string);
        this.pService
          .searchImageById(this.prod.prodid as number)
          .subscribe((datas) => {
            console.log(datas);
            if (datas == null || datas === 0) {
              this.images = [];
              this.image = [];
              console.log('Empty image' + this.image);
            } else {
              this.images = datas as Image[];
              this.image.push(this.images[0].img);
              console.log('img Found' + this.image);
            }
          });
      });
    }
  }

  addToCart(prodid: number) {
    this.pService.findCartByUserid(this.userId).subscribe((data) => {
      console.log('cart: ' + data);
      this.cartId = data.cartId;
      this.pService.addToCart(prodid, this.cartId).subscribe((data) => {
        console.log(data);
      });
      this.router.navigate(['showcart'], {
        queryParams: { data: this.cartId },
      });
    });
  }

  viewProduct(prodid: number) {
    this.router.navigate(['showproducts'], {
      queryParams: { data: JSON.stringify(prodid) },
    });
  }
}
