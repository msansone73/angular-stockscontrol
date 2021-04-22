import { Stock } from './../model/stock.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  baseUrl = environment.baseUrl+"stock"

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

  readById(id: number):Observable<Stock>{
    return this.http.get<Stock>(this.baseUrl+"/"+id)
  }

  delete(id:number):Observable<Stock[]>{
    return this.http.delete<Stock[]>(this.baseUrl+"/"+id)
  }

  update(stock:Stock, id:number):Observable<Stock[]>{
    return this.http.put<Stock[]>(this.baseUrl+"/"+id, stock)
  }

}
