import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsConnectedGuard implements CanActivate {

  constructor(private user: UserService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.checkUserRoleAndReturnTrueIfCanActivateOrReturnFalseAndNavigateBackToHome()

  }

  checkUserRoleAndReturnTrueIfCanActivateOrReturnFalseAndNavigateBackToHome(){
    if(this.user.getRole == 'USER' || this.user.getRole == 'ADMIN'){
      return true
    }else{
      this.router.navigate(['/home'])
      return false
    }
  }

}
