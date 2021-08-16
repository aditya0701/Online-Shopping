import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Supplier } from '../supplier';

@Component({
  selector: 'app-retailer-profile',
  templateUrl: './retailer-profile.component.html',
  styleUrls: ['./retailer-profile.component.css'],
})
export class RetailerProfileComponent implements OnInit {
  constructor(private pService: ProductService, private router: Router) {
    this.details = new Supplier();
  }
  details: Supplier;
  supplierid: number = 1;

  prod: any;
  prodid: number = 108;
  ngOnInit(): void {
    this.supplierid = parseInt(sessionStorage.getItem('supplier')!);
    console.log("profil:"+this.supplierid);
    
    this.pService.getSupplierDetails(this.supplierid).subscribe((data) => {
      console.log(data);
      this.details = data as Supplier;
    });

    this.pService.getProductsBySupplier(this.supplierid).subscribe((data) => {
      console.log(data);
      this.prod = data;
    });
  }

  Add() {
    this.router.navigate(['add-product']);
  }

  Delete() {
    this.router.navigate(['delete-product']);
  }

  Edit() {
    this.router.navigate(['update-product']);
  }
}
