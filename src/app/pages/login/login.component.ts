import { UsuarioStoreService } from './../../services/usuario.store.service';
import { Login } from './../../model/login.model';
import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export  class LoginComponent implements OnInit {

  hide = true;

  inputLogin=''
  inputSenha=''
  mensagem=''

  usuario:Login={ name:'', email:'',  password:''} 

  constructor(private autenticacaoService:AutenticacaoService,
              private router:Router
    ) { }

  ngOnInit(): void {
  }


  loginSucess(r:Router){    
    this.router.navigate(['home'])
  }

  loginFail(msg:string){
    this.mensagem=msg
  }

  logar(){
    this.autenticacaoService.logar(this.inputLogin,this.inputSenha, 'home', this) 
  }

  logout(){
    this.autenticacaoService.logout()
  }

}
