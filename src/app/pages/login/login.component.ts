import { UsuarioStoreService } from './../../services/usuario.store.service';
import { Login } from './../../model/login.model';
import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export  class LoginComponent implements OnInit {

  inputLogin=''
  inputSenha=''
  mensagem=''

  usuario:Login={ name:'', email:'',  password:''} 

  constructor(private autenticacaoService:AutenticacaoService,
    ) { }

  ngOnInit(): void {
  }

  logar(){
    //this.autenticacaoService.logar("msansone@gmail.com","senha")
    this.autenticacaoService.logar(this.inputLogin,this.inputSenha)
    this.mensagem=UsuarioStoreService.erro
    UsuarioStoreService.erro=''
  }

  logout(){
    this.autenticacaoService.logout()
  }

}
