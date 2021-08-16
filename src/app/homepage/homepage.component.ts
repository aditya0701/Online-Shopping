import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  title = 'LTI Shopping';
  val: string = '';
  userid:number=1;
  prod = new Array<Product>();

  constructor(
    private pService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userid = parseInt(sessionStorage.getItem('user')!);
    if (this.userid == undefined) {
      this.userid = 1;
    }
    console.log("Homepage userid"+this.userid);
    
  }
  //send all the userid to other components
  findByName() {
    this.pService.findByName(this.val).subscribe((data) => {
      this.prod = data as Product[];
      console.log('prod' + this.prod);

      this.router.navigate(['showproducts'], {
        queryParams: { data: this.prod[0].prodid },
      });
    });
  }

  viewProfile(){
    this.router.navigate(['user-profile']);
  }
}
