import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navegarParaStockCreate(): void {
    this.router.navigate(['stocks-create'])
  }

}
