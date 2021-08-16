import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../login';
import { ProductService } from '../product.service';
import { Supplier } from '../supplier';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  login!: Login;
  email: string = '';
  password: string = '';
  user:User;
  supplier:Supplier;
  uId$!: Observable<number | null>;

  constructor(
    private formBuilder: FormBuilder,
    private _customerService: UserService,
    private _router: Router
  ) {
    this.user=new User();
    this.supplier=new Supplier();
  }

  ngOnInit(): void {
    if (parseInt(sessionStorage.getItem('user')!) > 0) {
      alert('Already Logged In');
      this._router.navigate(['homepage']);
    }
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  loginUser() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      this.login = new Login();
      this.login.email = this.email;
      this.login.password = this.password;
      this._customerService.loginuser(this.login).subscribe((data)=>{
        this.user = data as User;
        if(this.user != undefined){
          console.log("login page"+this.user.userid.toString());
          
          sessionStorage.setItem('user',this.user.userid.toString())
          this._router.navigate(['homepage']);
        }
        else{
          alert("Wrong username or password");
        }
      })
      

      //alert(this.login.email);
    }
  }
  loginAdmin() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      this.login = new Login();
      this.login.email = this.email;
      this.login.password = this.password;
      this._customerService.loginadmin(this.login);
      // this._router.navigate(['AdminPage']); //change the nvaigation acc to page
      //alert(this.login.email);
    }
  }
  loginRetailer() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      this.login = new Login();
      this.login.email = this.email;
      this.login.password = this.password;
      this._customerService.loginretailer(this.login).subscribe((data) => {
        this.supplier = data as Supplier;
        if (this.supplier != undefined) {
          console.log('login page' + this.supplier.supplier_id.toString());

          sessionStorage.setItem('supplier', this.supplier.supplier_id.toString());
          this._router.navigate(['retailerpage']);
        } else {
          alert('Wrong username or password');
        }
      });
      this._router.navigate(['retailerpage']); //change the navigation acc to page
      //alert(this.login.email);
    }
  }

  moveToHomePage(id: any) {
    if (id < 0) {
      alert('User Not Found');
      this.uId$ = null!;
      return;
    }
    sessionStorage.setItem('user', id);
    this._router.navigate(['home']);
  }

  forgotPassword() {
    if (this.email === '') {
      alert('Provide email');
      return;
    }
    sessionStorage.setItem('forgot-email', this.email);
    this._router.navigate(['forgot-password']);
  }
  get f() {
    return this.registerForm.controls;
  }
  registerUser() {
    this._router.navigate(['register-user']);
  }
}
