import { Observable } from 'rxjs';
import { Login } from './../model/login.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  logar(login:string, password: string): Observable<Login>{
    const loginObs={'login':login, 'password':password}
    return this.http.post<Login>(this.baseUrl, loginObs)
  }

  readAll():Observable<Login[]>{

    return this.http.get<Login[]>(this.baseUrl)
  }

  readById(id:number):Observable<Login>{
    return this.http.get<Login>(this.baseUrl+"/"+id)
  }

}
