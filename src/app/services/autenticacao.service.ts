import { LoginService } from 'src/app/services/login.service';
import { Login } from './../model/login.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  static usuario:Login={ nome:'', email:'', login:'', password:''}

  constructor(private loginService:LoginService) {}


  logar(login:string, password: string){
    this.loginService.logar(login,password)
      .subscribe( l => AutenticacaoService.usuario=l)
  }

  logout(){
    AutenticacaoService.usuario={ nome:'', email:'', login:'', password:''}
  }

  getUsuario():string{
    return AutenticacaoService.usuario.login
  }

  isLogged():boolean{
    return AutenticacaoService.usuario!=null
  }

}
