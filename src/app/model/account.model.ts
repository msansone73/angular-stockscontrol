import { Login } from './login.model';
export interface Account{
    id?: number
    login: Login
    name:string
    description:string
}