import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  User!: User;
  uId!: number;
  constructor(private _customerService: UserService, private _router: Router) {}

  ngOnInit(): void {
    //sessionStorage.setItem('user', '7'); // After User Login Page Creation This Line has to be Commented.
    if (sessionStorage.getItem('user') != 'null') {
      this.uId = parseInt(sessionStorage.getItem('user')!);
      this._customerService
        .getUserById(this.uId.toString())
        .subscribe((data) => {
          this.User = data;
        });
    } else {
      alert('User Not Logged In');
      this._router.navigate(['home']);
    }
  }
  onEditProfileClick() {
    sessionStorage.setItem('user-details', JSON.stringify(this.User));
    this._router.navigate(['/user-edit']);
  }
}
