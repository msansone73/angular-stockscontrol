import { LoginService } from 'src/app/services/login.service';
import { Login } from './../model/login.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  static usuario:Login={ nome:'', email:'', password:''}

  constructor(private loginService:LoginService) {}


  logar(email:string, password: string){
    this.loginService.logar(email,password)
      .subscribe( l => AutenticacaoService.usuario=l)
  }

  logout(){
    AutenticacaoService.usuario={ nome:'', email:'',  password:''}
  }

  getUsuario():string{
    return AutenticacaoService.usuario.email
  }

  isLogged():boolean{
    return AutenticacaoService.usuario!=null
  }

}
