import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { WasherauthService } from './washerauth.service';

@Injectable({
  providedIn: 'root'
})
export class WasherauthGuardService {

  constructor(private router: Router, private authService: WasherauthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authService.isLoggedIn())
      return true;

    this.router.navigate(['/washerlogin']);
    return false;
  }
}
