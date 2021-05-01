import { UsuarioStoreService } from './../../services/usuario.store.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Login } from 'src/app/model/login.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  usuario:Login={ name:'', email:'',  password:''}

  constructor(private usuarioStore: UsuarioStoreService) { }

  ngOnInit(): void {

    this.usuarioStore.onMessage().subscribe(
      n=> this.usuario=n
    )

  }



}
