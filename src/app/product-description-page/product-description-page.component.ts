import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description-page',
  templateUrl: './product-description-page.component.html',
  styleUrls: ['./product-description-page.component.css'],
})
export class ProductDescriptionPageComponent implements OnInit {
  images = [
    { img: '/assets/images/img_1.jpg' },
    { img: '/assets/images/asusA17.jpg' },
    { img: '/assets/images/asusA17_2.jpg' },
    { img: '/assets/images/asusA17_3.jpg' },
    { img: '/assets/images/asusA17_4.jpg' },
    { img: '/assets/images/asusA17_5.jpg' },
    { img: '/assets/images/asusA17_6.jpg' },
  ];
  index: number = 0;
  image: String = this.images[this.index].img;
  
  prodid:any;
  prod:Product;
  
  constructor(private pservice:ProductService) {
    this.prod=new Product;
  }
  ngOnInit(): void {
    this.prodid = localStorage.getItem('prodid');
    this.pservice.serachProductById(1).subscribe((data) => {
      this.prod = data as Product;
    });
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
      this.index = this.images.length-1;
      this.image = this.images[this.index].img;
      console.log(this.image);
    } else {
      this.index--;
      this.image = this.images[this.index].img;
      console.log(this.image + ' ' + 'index= ' + this.index);
    }
  }

}
