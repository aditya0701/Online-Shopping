import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  userSignUp: User;
  constructor(private _customerService: UserService, private _router: Router) {
    this.userSignUp = new User();
  }

  ngOnInit(): void {
    if (parseInt(sessionStorage.getItem('user')!) > 0) {
      alert('Already Logged In');
      this._router.navigate(['home']);
    }
  }

  onRegisterClick() {
    this._customerService.addNewUser(this.userSignUp).subscribe((data) => {
      if (data == -100) {
        console.log(data);
        alert('User Already Registered');
      } else {
        console.log(data);
        //sessionStorage.setItem('user',this.userSignUp.userId);
        // this._router.navigate(['user-profile']);
        this._router.navigate(['user-login']); // after implementation uncomment this and comment above line
      }
    });
  }
}
