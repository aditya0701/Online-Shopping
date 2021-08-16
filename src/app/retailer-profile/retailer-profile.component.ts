import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-retailer-profile',
  templateUrl: './retailer-profile.component.html',
  styleUrls: ['./retailer-profile.component.css'],
})
export class RetailerProfileComponent implements OnInit {
  constructor(private pService: ProductService, private router: Router) {}
  details: any;
  supplierid: number = 1;

  prod: any;
  prodid: number = 108;
  ngOnInit(): void {
    this.pService.getSupplierDetails(this.supplierid).subscribe((data) => {
      console.log(data);
      this.details = data;
    });

    this.pService.getProductsBySupplier(this.supplierid).subscribe((data) => {
      console.log(data);
      // this.prod=data as Product;
      this.prod = data;
    });
  }

  Add() {
    this.router.navigate(['retailerAddfunction']);
  }

  Delete() {
    this.router.navigate(['retailerdeletefunction']);
  }

  Edit() {
    this.router.navigate(['retailerupdateproduct']);
  }
}
