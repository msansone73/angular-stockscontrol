import { Stock } from './../model/stock.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  baseUrl = "http://localhost:8080/stock"

  constructor(
              private snackBar: MatSnackBar,
              private http: HttpClient) { }

  showMessage(msg:string):void{
    this.snackBar.open(msg,'x',
      {
      duration:3000,
      horizontalPosition:'right', 
      verticalPosition:'top'
    })
  }

  create(stock:Stock): Observable<Stock>{
    return this.http.post<Stock>(this.baseUrl, stock)
  }

  read():Observable<Stock[]>{
    return this.http.get<Stock[]>(this.baseUrl)
  }

  delete(id:number):Observable<Stock[]>{
    return this.http.delete<Stock[]>(this.baseUrl+"/"+id)
  }

}
