import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { Image } from '../image';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.css'],
})
export class ComparePageComponent implements OnInit {
  //filter
  pCat: string = '';
  pBrand: string = '';
  pLower: number = 0;
  pUpper: number = 0;

  @Input()
  productList: Product[] = [];
  products = new Array<Product>();
  images = new Array<Image>();
  image = new Array<String>();

  constructor(
    private prodService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
    // let data: any = this.products;
    // this.router.navigate(['showItem'], {
    //   queryParams: { data: JSON.stringify(data) },
    // });
  }

  onFilterCatClick() {
    console.log('clicked');
    if (this.pCat == '') {
      alert('Enter values to filter category');
    } else {
      this.prodService.findByCategory(this.pCat).subscribe((data) => {
        console.log(data);
        this.products = data as Product[];
        this.image = [];
        for (var index in this.products) {
          this.prodService
            .searchImageById(this.products[index].prodid)
            .subscribe((data) => {
              if (data == null || data === 0) {
                this.images = [];
                this.image = [];
                console.log('Empty image' + this.image);
              } else {
                this.images = data as Image[];
                this.image.push(this.images[0].img);
                console.log('img Found' + this.image);
              }
            });
        }
      });
      // let data: any = this.products;
      // this.router.navigate(['showItem'], {
      //   queryParams: { data: JSON.stringify(data) },
      // });
    }
  }

  //filter brand
  onFilterBrandClick() {
    console.log('clicked');
    if (this.pBrand == '') {
      alert('Enter values to filter category');
    } else {
      this.prodService.findByBrand(this.pBrand).subscribe((data) => {
        console.log(data);
        this.products = data as Product[];
        this.image = [];
        for (var index in this.products) {
          this.prodService
            .searchImageById(this.products[index].prodid)
            .subscribe((data) => {
              if (data == null || data === 0) {
                this.images = [];
                this.image = [];
                console.log('Empty image' + this.image);
              } else {
                this.images = data as Image[];
                this.image.push(this.images[0].img);
                console.log('img Found' + this.image);
              }
            });
        }
      });
      // let data: Product[] = this.products;
      // this.router.navigate(['showItem'], {
      //   queryParams: { data: JSON.stringify(data) },
      // });
    }
  }

  //filter price
  onFilterPriceClick() {
    console.log('clicked');
    if (this.pLower == 0 && this.pUpper == 0) {
      alert('Enter values to filter category');
    } else {
      this.prodService
        .findProductByPrice(this.pLower, this.pUpper)
        .subscribe((data) => {
          console.log(data);
          this.products = data as Product[];
          this.image = [];
          for (var index in this.products) {
            this.prodService
              .searchImageById(this.products[index].prodid)
              .subscribe((data) => {
                if (data == null || data === 0) {
                  this.images = [];
                  this.image = [];
                  console.log('Empty image' + this.image);
                } else {
                  this.images = data as Image[];
                  this.image.push(this.images[0].img);
                  console.log('img Found' + this.image);
                }
              });
          }
        });
      // let data: any = this.products;
      // this.router.navigate(['showItem'], {
      //   queryParams: { data: JSON.stringify(data) },
      // });
    }
  }

  //sort according to price
  onPriceSortClickAsc() {
    this.products = this.products.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      } else if (a.price < b.price) {
        return -1;
      } else return 0;
    });
  }

  onPriceSortClickDsc() {
    this.products = this.products.sort((a, b) => {
      if (a.price < b.price) {
        return 1;
      } else if (a.price > b.price) {
        return -1;
      } else return 0;
    });
  }

  viewProduct(prodid: number) {
    this.router.navigate(['showproducts'], {
      queryParams: { data: JSON.stringify(prodid) },
    });
  }

  getAllProducts() {
    this.prodService.getAllProducts().subscribe((data) => {
      this.products = data as Product[];
      console.log(this.products);
      this.image = [];
      for (var index in this.products) {
        this.prodService
          .searchImageById(this.products[index].prodid)
          .subscribe((data) => {
            if (data == null || data === 0) {
              this.images = [];
              this.image = [];
              console.log('Empty image' + this.image);
            } else {
              this.images = data as Image[];
              this.image.push(this.images[0].img);
              console.log('img Found' + this.image);
            }
          });
      }
    });
  }
}
