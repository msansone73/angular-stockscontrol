import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Stock } from 'src/app/model/stock.model';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stocks-update',
  templateUrl: './stocks-update.component.html',
  styleUrls: ['./stocks-update.component.css']
})
export class StocksUpdateComponent implements OnInit {


  stock:Stock = {
    "id":0, 
    "cod":"",    
    "name":"",
    "description":""
  }

  constructor(private stockService: StockService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    let nid:number  = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.stockService.readById(nid).subscribe(
      (data) => this.stock=data
    )
  }

  updateStock(mensagem:string):void{
    this.stockService.update(this.stock, this.stock.id).subscribe(
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
