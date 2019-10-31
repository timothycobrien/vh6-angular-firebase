import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(
    private loginService: LoginService
  ) { }

  canActivate(): boolean {
    const user = this.loginService.getLoginStatus();
    console.log(user);
    return (user == null ? false : true);
  }
}
