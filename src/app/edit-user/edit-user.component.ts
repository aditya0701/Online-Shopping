import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  updateUser: User;
  newUpdatedUser: any;
  oldUser!: User;
  constructor(private _customerService: UserService, private _router: Router) {
    this.updateUser = new User();
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('user') == 'null') {
      alert('User Not Logged In');
      this._router.navigate(['home']);
    } else {
      this.oldUser = JSON.parse(sessionStorage.getItem('user-details')!);
    }
  }

  onUpdateUserClick() {
    let uid = parseInt(sessionStorage.getItem('user')!);
    this.updateUser.userid = uid;
    console.log(this.updateUser);
    this._customerService.updateUser(this.updateUser).subscribe((data) => {
      this.newUpdatedUser = data;
      if (this.newUpdatedUser == -100) {
        alert('Your Profile Not Updated');
      } else {
        alert('Profile Updated Successfull');
        this._router.navigate(['user-profile']);
      }
    });
  }
}
