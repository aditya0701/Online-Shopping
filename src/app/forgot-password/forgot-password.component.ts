import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ForgetPassword } from '../forget-password';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  email: string = '';
  password: string = '';
  repassword: string = '';
  recievedOTP!: number;
  otp$!: Observable<number>;
  message!: string;
  constructor(private _customerService: UserService, private _router: Router) {}

  ngOnInit(): void {
    if (parseInt(sessionStorage.getItem('user')!) > 0) {
      this._router.navigate(['home']);
    } else if (sessionStorage.getItem('forgot-email') == 'null') {
      this._router.navigate(['home']);
    } else {
      this.email = sessionStorage.getItem('forgot-email')!;
    }
  }

  generateOTP() {
    if (this.password === '' && this.repassword === '') {
      alert('First Enter Passwords');
    } else if (this.password != this.repassword) {
      alert('Password do not Match');
    } else {
      this.otp$ = this._customerService.generateOTP();
    }
  }
  changePassword() {
    if (this.password === '' && this.repassword === '') {
      alert('First Enter Passwords');
    } else if (this.password != this.repassword) {
      alert('Password do not Match');
    } else if (this.recievedOTP === 0) {
      alert('OTP is missing');
    } else {
      let forgotPassword = new ForgetPassword();
      forgotPassword.email = this.email;
      forgotPassword.password = this.repassword;
      forgotPassword.otp = this.recievedOTP.toString();
      this._customerService.forgotPassword(forgotPassword).subscribe((data) => {
        this.message = data;
      });
      if (this.message == 'Password Updated Successfull') {
        alert('Password Updated Successfull');
        sessionStorage.setItem('forgot-email', null!);
        this._router.navigate(['user-login']);
      }
    }
  }
}
