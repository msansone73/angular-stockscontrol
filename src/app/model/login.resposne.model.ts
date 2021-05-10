import { Login } from 'src/app/model/login.model';
import { Erro } from './erro.model';
export interface LoginResponse {
    erro?:Erro
    login?: Login
}