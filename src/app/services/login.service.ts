import { LoginResponse } from './../model/login.resposne.model';
import { Observable } from 'rxjs';
import { Login } from './../model/login.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl= environment.baseUrl+"login"

  constructor(private http: HttpClient) {}

  
  create(login:Login):Observable<Login>{
    return this.http.post<Login>(this.baseUrl, login)
  }

  logar(email:string, password: string): Observable<LoginResponse>{
    const loginObs={'email':email, 'password':password}
    return this.http.post<LoginResponse>(this.baseUrl+"/autenticar", loginObs)
  }

  readAll():Observable<Login[]>{
    return this.http.get<Login[]>(this.baseUrl)
  }

  readById(id:number):Observable<Login>{
    return this.http.get<Login>(this.baseUrl+"/"+id)
  }

}
