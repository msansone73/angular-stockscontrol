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

  httpOptions={};


  constructor(private http: HttpClient) {

    var headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    headers_object.append("Authorization", "Basic " + btoa("admin:password"));

    this.httpOptions = {
      headers: headers_object
    };

   }

  
  create(login:Login):Observable<Login>{
    return this.http.post<Login>(this.baseUrl, login, this.httpOptions)
  }

  logar(login:string, password: string): Observable<Login>{
    const loginObs={'login':login, 'password':password}
    return this.http.post<Login>(this.baseUrl, loginObs, this.httpOptions)
  }

  readAll():Observable<Login[]>{

    return this.http.get<Login[]>(this.baseUrl, this.httpOptions)
  }

  readById(id:number):Observable<Login>{
    return this.http.get<Login>(this.baseUrl+"/"+id, this.httpOptions)
  }

}
