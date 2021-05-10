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
    
    this.loginService.logar(email,password)
      .subscribe( 
        l => {
          if (l==null)
          {
            UsuarioStoreService.erro='Retorno nulo!'  
            console.log('retorno nulo!')
          } else {
            if(l.erro!=null){
              UsuarioStoreService.erro=l.erro.description
              console.log(l.erro.description)
            } else {
              this.usuarioStore.sendMessage(l.login)
            }
          }        
        }
        ,err=>{
          UsuarioStoreService.erro=err
          console.log('erro=',err.message)
        })
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
