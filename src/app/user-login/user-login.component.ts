import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../login';
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

  login: Login;
  email: string = '';
  val:string="";
  password: string = '';
  uId$!: Observable<number | null>;
  user: User;
  constructor(
    private formBuilder: FormBuilder,
    private _customerService: UserService,
    private _router: Router
  ) {
    this.user = new User();
    this.login = new Login();
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

  loginU() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log('form invalid');

      return;
    } else {
      console.log('Form Valid');

      
      this.login.email = this.email;
      this.login.password = this.password;
      this._router.navigate(['homepage'], {
        queryParams: { data: 2 },
      });
      // this._customerService.loginUser(this.login).subscribe((data) => {
      //   this.user = data as User;
      //   console.log('user id= ' + this.user.userId);
      //   this.val = this.user.userId.toString();
      //   // sessionStorage.setItem("user", this.val )
      //   // this._router.navigate(['homepage']);
      // });
      //alert(this.login.email);
      
      
    }
  }
  // moveToHomePage(id: any) {
  //   if (id < 0) {
  //     alert('User Not Found');
  //     this.uId$ = null!;
  //     return;
  //   }
  //   sessionStorage.setItem('user', id);
  //   this._router.navigate(['homepage']);
  // }

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
