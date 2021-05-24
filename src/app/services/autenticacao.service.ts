import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { Login } from './../model/login.model';
import { Injectable } from '@angular/core';
import { UsuarioStoreService } from './usuario.store.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {


  constructor(private loginService:LoginService, 
    private usuarioStore: UsuarioStoreService,
    private router: Router) {}


  logar(email:string, password: string, path:string, source:any){
    
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
              source.mensagem=l.erro.description
            } else {
              this.usuarioStore.sendMessage(l.login)
              this.router.navigate([path])
            }
          }        
        
        }
        ,err=>{
          UsuarioStoreService.erro=err
          console.log('erro=',err.message)
        })
  }

  logout(){
    this.loginService.logout().subscribe(
      b =>{
        this.usuarioStore.sendMessage({ name:'', email:'',  password:''})
      }
    )

  }

  getUsuario():string{
    return UsuarioStoreService.usuario.email
  }

  isLogged():boolean{
    return UsuarioStoreService.usuario.email!=''
  }

}
