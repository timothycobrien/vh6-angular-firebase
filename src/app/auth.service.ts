import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    const status = this.loginService.isLoggedIn();
    console.log('1', JSON.stringify(this.loginService.isLoggedIn()));
    console.log('2', status);
    return status.pipe(map(user => {
      if (user == null) {
        console.log('need to log in');
        this.router.navigate(['login']);
        return false;
      } else {
        return true;
      }
    }));
  }
}
