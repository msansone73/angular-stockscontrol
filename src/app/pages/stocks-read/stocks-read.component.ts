import { StockService } from './../../services/stock.service';
import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stocks-read',
  templateUrl: './stocks-read.component.html',
  styleUrls: ['./stocks-read.component.css']
})
export class StocksReadComponent implements OnInit {

  stocks: Stock[]
  displayedColumns: string[] = ['id','cod', 'name', 'description', 'actiondelete', 'actionupdate'];

  constructor(private stockService : StockService, 
              private router: Router) { }

  ngOnInit(): void {
    this.carrega()
  }

  private carrega():void{
    this.stockService.read().subscribe(
      data=> {
        this.stocks=data
        console.log(this.stocks)
      })
  }

  delete(id: number):void{
    this.stockService.delete(id).subscribe(()=>this.carrega())
  }

  goUpdate(id:number):void {
    //this.router.navigate(["stocks-update", id])
    this.router.navigate(['stocks-update', id])
  }

}
