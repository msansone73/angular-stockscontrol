import { Stock } from './../model/stock.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  baseUrl = environment.baseUrl+"stock"

  httpOptions={};

  constructor(
              private snackBar: MatSnackBar,
              private http: HttpClient) { 
                
                var headers_object = new HttpHeaders();
                headers_object.append('Content-Type', 'application/json');
                headers_object.append("Authorization", "Basic " + btoa("admin:password"));
            
                this.httpOptions = {
                  headers: headers_object
                };

              }

  showMessage(msg:string):void{
    this.snackBar.open(msg,'x',
      {
      duration:3000,
      horizontalPosition:'right', 
      verticalPosition:'top'
    })
  }

  create(stock:Stock): Observable<Stock>{
    return this.http.post<Stock>(this.baseUrl, stock, this.httpOptions)
  }

  read():Observable<Stock[]>{
    return this.http.get<Stock[]>(this.baseUrl, this.httpOptions)
  }

  readById(id: number):Observable<Stock>{
    return this.http.get<Stock>(this.baseUrl+"/"+id, this.httpOptions)
  }

  delete(id:number):Observable<Stock[]>{
    return this.http.delete<Stock[]>(this.baseUrl+"/"+id, this.httpOptions)
  }

  update(stock:Stock, id:number):Observable<Stock[]>{
    return this.http.put<Stock[]>(this.baseUrl+"/"+id, stock, this.httpOptions)
  }

}
