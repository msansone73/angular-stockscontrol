import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StocksCreateComponent } from './pages/stocks-create/stocks-create.component';
import { StocksComponent } from './pages/stocks/stocks.component';

const routes: Routes = [
  {  path: "", component: HomeComponent  },
  {  path: "stocks", component: StocksComponent  },
  {  path: "stocks-create", component: StocksCreateComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }