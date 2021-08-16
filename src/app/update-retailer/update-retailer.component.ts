import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-retailer',
  templateUrl: './update-retailer.component.html',
  styleUrls: ['./update-retailer.component.css'],
})
export class UpdateRetailerComponent implements OnInit {
  prodid: any;
  prod2: Product;
  prod: any;

  constructor(private pservice: ProductService) {
    this.prod2 = new Product();
  }

  ngOnInit(): void {
    this.prodid = localStorage.getItem('prodid');
    this.pservice.updateProduct(this.prodid).subscribe((data) => {
      //  this.prod2=data as Product;
      this.prod = data;
      console.log(data);
    });
  }

  saveData() {
    this.pservice.editproduct(this.prod).subscribe((data) => {
      console.log(data);
    });
    alert('Item updated Successfully!!');
  }
}
