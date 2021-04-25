import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenizedReq= req.clone(
      {
        setHeaders: {
          'Authorization': 'Basic ' + btoa('admin:password'),
          'Content-Type':'application/json',
          'Connection':'keep-alive', 
          'Cookie':'JSESSIONID=ADA9F62BFD86459C94042E13315E7F61'
        }
      }
    )

    return next.handle(tokenizedReq)

  }
}
