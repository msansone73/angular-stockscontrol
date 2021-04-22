import { Stock } from './stock.model';
import { Account } from './account.model';
export interface Transaction{
    id?:number
    account:Account
    stock:Stock
    quantity:number
    unitPrice:number
    transactionType: TransactionType
}