import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  prod: any;
  prodid: number = 108;
  supplierid: number = 0;

  constructor(private pService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.pService.getProductsBySupplier(this.supplierid).subscribe((data) => {
      console.log(data);
      // this.prod=data as Product;
      this.prod = data;
    });
  }

  editInfo(prodid: any) {
    localStorage.setItem('prodid', prodid);
    this.router.navigate(['retailerupdatefunction']);
  }
}
