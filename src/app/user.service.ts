import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForgetPassword } from './forget-password';
import { Login } from './login';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _url = 'http://localhost:9797/usercontroller/';
  constructor(private _http: HttpClient) {}

  getUserById(uId: string): Observable<User> {
    return this._http.get<User>(this._url + 'getUserById/' + uId);
  }
  updateUser(updateUser: User): Observable<User> {
    this._url += 'updateuser/';
    return this._http.put<User>(this._url, updateUser);
  }
  addNewUser(newUser: User) {
    this._url += 'save/';
    return this._http.post(this._url, newUser);
  }
  loginUser(login: Login): Observable<User> {
    this._url += 'loginUser/';
    console.log(this._url);

    return this._http.post<User>(this._url, login);
  }
  generateOTP(): Observable<number> {
    this._url += 'generateOTP/';
    return this._http.get<number>(this._url);
  }
  forgotPassword(forgotPassword: ForgetPassword) {
    this._url += 'forgotPassword/';
    return this._http.post(this._url, forgotPassword, { responseType: 'text' });
  }
}
