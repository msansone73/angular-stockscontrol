import { StocksUpdateComponent } from './pages/stocks-update/stocks-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StocksCreateComponent } from './pages/stocks-create/stocks-create.component';
import { StocksComponent } from './pages/stocks/stocks.component';
import { LoginListComponent } from './pages/login-list/login-list.component';

const routes: Routes = [
  {  path: "", component: HomeComponent  },
  {  path: "stocks", component: StocksComponent  },
  {  path: "stocks-create", component: StocksCreateComponent  },
  {  path: "stocks-update/:id" , component: StocksUpdateComponent},
  { path:"login-list", component: LoginListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
