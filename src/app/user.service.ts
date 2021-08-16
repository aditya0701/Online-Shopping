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
  private _tempurl = 'http://localhost:9797/usercontroller/';
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
  loginuser(loginuser: Login): Observable<any> {
    this._url = this._tempurl;
    this._url += 'loginUser';
    return this._http.post<any>(this._url, loginuser);
  }
  loginadmin(loginadmin: Login): Observable<any> {
    this._url = this._tempurl;
    this._url += 'loginAdmin';
    return this._http.post<any>(this._url, loginadmin);
  }
  loginretailer(loginretailer: Login): Observable<any> {
    this._url = this._tempurl;
    this._url += 'loginSupplier';
    return this._http.post<any>(this._url, loginretailer);
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
