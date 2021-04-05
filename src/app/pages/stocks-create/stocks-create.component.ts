import { StockService } from './../../services/stock.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Stock } from 'src/app/model/stock.model';


@Component({
  selector: 'app-stocks-create',
  templateUrl: './stocks-create.component.html',
  styleUrls: ['./stocks-create.component.css']
})
export class StocksCreateComponent implements OnInit {

  constructor(private stockService: StockService, 
              private router: Router) { }

  stock:Stock = {
    "cod":"",    
    "name":"",
    "description":""
  }

  ngOnInit(): void {
  }

  createStock(mensagem:string):void{
    this.stockService.create(this.stock).subscribe(
        ()=> {
          this.stockService.showMessage(mensagem)
          this.router.navigate(['stocks'])
        }
      )
    
  }

  cancelar():void{
    this.router.navigate(['stocks'])
  }

}
