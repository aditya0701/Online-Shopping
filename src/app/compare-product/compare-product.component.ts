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
  cartId: number = 2;
  userId: number = 1;

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
      if (params.data == undefined) this.prodids = [1, 2, 3, 4];
      for (var index in params.data) {
        this.prodids.push(params.data[index] as number);
      }
      this.userId = parseInt(sessionStorage.getItem('user')!);
      this.pService.findCartByUserid(this.userId).subscribe((data) => {
        console.log('Prod desc cart:');
        console.log(data);
        this.cartId = data.cart_id;
        console.log("compare Page cartid: "+this.cartId);
      });
    });


    for (var index in this.prodids) {
      this.pService.serachProductById(this.prodids[index]).subscribe((data) => {
        this.products.push(data as Product);
        this.prod = data as Product;
        console.log(('products ' + this.prod) as string);
      });
    }
  }

  addToCart(prodid: number) {
    this.pService.addToCart(prodid, this.cartId).subscribe((data) => {
      console.log(data);
    });
    this.router.navigate(['showcart']);
  }

  viewProduct(prodid: number) {
    this.router.navigate(['showproducts'], {
      queryParams: { data: JSON.stringify(prodid) },
    });
  }
}
