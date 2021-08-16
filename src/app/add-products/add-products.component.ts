import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Supplier } from '../supplier';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent implements OnInit {
  prod: Product;
  supplierId: number = 5;
  constructor(private prodservice: ProductService) {
    this.prod = new Product();
  }

  ngOnInit(): void {}

  saveData() {
    this.prodservice.addNewProduct(this.prod,this.supplierId).subscribe((data) => {
      console.log(data);
    });

    alert('Item Added Successfully!!');
  }
}
