import { AutenticacaoService } from './../../services/autenticacao.service';
import { UsuarioStoreService } from './../../services/usuario.store.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Login } from 'src/app/model/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  usuario:Login={ name:'', email:'',  password:''}
  display="none"

  constructor(private usuarioStore: UsuarioStoreService, 
              private router:Router,
              private autenticacaoService:AutenticacaoService) { }

  ngOnInit(): void {
    this.usuarioStore.onMessage().subscribe(
      n=> {
        this.usuario=n
        if (n.email==''){
          this.display="none"
        } else {
          this.display="inline"
        }
      }
    )
  }

  navTo(local:string){
    this.router.navigate([local])
  }

  onStock(){
    this.router.navigate(['stocks'])
  }

  logout(){
    this.autenticacaoService.logout()
    this.router.navigate(['login'])
  }



}
