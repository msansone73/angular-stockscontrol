import { LoginService } from 'src/app/services/login.service';
import { Login } from './../model/login.model';
import { Injectable } from '@angular/core';
import { UsuarioStoreService } from './usuario.store.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {


  constructor(private loginService:LoginService, 
    private usuarioStore: UsuarioStoreService) {}


  logar(email:string, password: string){
    console.log('logar('+email+','+password+')')
    this.loginService.logar(email,password)
      .subscribe( 
        l => this.usuarioStore.sendMessage(l)
        )
  }

  logout(){
    this.usuarioStore.sendMessage({ name:'', email:'',  password:''})
  }

  getUsuario():string{
    return UsuarioStoreService.usuario.email
  }

  isLogged():boolean{
    return UsuarioStoreService.usuario.email!=''
  }

}
