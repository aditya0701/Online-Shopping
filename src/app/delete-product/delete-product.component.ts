import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css'],
})
export class DeleteProductComponent implements OnInit {
  prod: any;
  prodid: number = 0;
  supplierid: number = 3;

  constructor(private pService: ProductService) {}

  ngOnInit(): void {
    this.pService.getProductsBySupplier(this.supplierid).subscribe((data) => {
      console.log(data);
      this.prod = data;
    });
  }

  DeleteProd(id: number) {
    if (confirm('Are you sure you want to delete this item?') == true) {
      this.pService.deleteProduct((this.prodid = id)).subscribe((data) => {
        console.log(data);
        this.prod = data;
      });

      window.location.reload();
    } else {
      alert('Delete cancelled!!');
    }
  }
}
