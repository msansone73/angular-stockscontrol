import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioStoreService {

  constructor() { }

  static usuario:Login={ name:'', email:'',  password:''}
  static erro=''

  private subject = new Subject<Login>();

  sendMessage(message: Login) {
    console.log('sendMessage('+message.name+')')
    UsuarioStoreService.usuario=message
    this.subject.next(message);
  }

  clearMessages() {
    UsuarioStoreService.usuario={ name:'', email:'',  password:''}
    this.subject.next();
  }

  onMessage(): Observable<Login> {
    return this.subject.asObservable();
  }



}
