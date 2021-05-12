
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {

  constructor(private autenticacaoService: AutenticacaoService, 
              private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.autenticacaoService.isLogged()){
      return true
    } else {
      return this.router.parseUrl('/login')
    }

  }
  
}
