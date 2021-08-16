import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Image } from '../image';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  prod = new Array<Product>();
  images = new Array<Image>();
  image = new Array<String>();
  link1 = 'assets/images/asusA17_2.jpg';
  link2 = 'assets/images/asusA17_3.jpg';
  link3 = 'assets/images/asusA17_4.jpg';
  link4 = 'assets/images/asusA17_5.jpg';
  link5 = 'assets/images/asusA17_6.jpg';
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: any) => {
      console.log(data);
      this.prod = data as Product[];
      console.log(this.prod);
    });
    this.image = [];
    for (var index in this.prod) {
      this.productService
        .searchImageById(this.prod[index].prodid)
        .subscribe((data) => {
          this.images = data as Image[];
          this.image.push(this.images[0].img);
        });
    }
  }

  right() {
    this.link1 = this.link2;
    this.link2 = this.link3;
    this.link3 = this.link4;
    this.link4 = this.link5;
    this.link5 = this.link1;
  }
}
