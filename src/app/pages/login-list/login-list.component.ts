import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/model/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.css']
})
export class LoginListComponent implements OnInit {

  logins:Login[]

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.carregar()
  }

  carregar():void{
    this.loginService.readAll().subscribe(data=> this.logins=data)
  }

  editar(id:number):void{
    alert(id)
  }

}
