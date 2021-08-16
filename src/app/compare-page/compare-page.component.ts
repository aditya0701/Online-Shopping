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
  isDisabled: boolean = false;

  products = new Array<Product>();

  compareProducts: number[] = [];

  constructor(
    private prodService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  onFilterCatClick() {
    console.log('clicked');
    if (this.pCat == '') {
      alert('Enter values to filter category');
    } else {
      this.prodService.findByCategory(this.pCat).subscribe((data) => {
        console.log(data);
        this.products = data as Product[];
      });
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
      });
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
        });
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
    });
  }

  addToCompare(val: number) {
      this.compareProducts.push(val);
      console.log(this.compareProducts);
    if (this.compareProducts.length >= 4) {
      this.isDisabled = true;
    }
  }
  compareProducts1(){
    this.router.navigate(['compareproducts'], {
      queryParams: { data: this.compareProducts },
    });
  }
}
