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

  usuario:Login={ name:'', email:'',  password:''} 

  constructor(private autenticacaoService:AutenticacaoService,
    ) { }

  ngOnInit(): void {
  }

  logar(){
    this.autenticacaoService.logar("msansone@gmail.com","senha")
  }

  logout(){
    this.autenticacaoService.logout()
  }

}
