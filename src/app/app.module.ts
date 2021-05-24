import { TokenInterceptorService } from './services/token-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule, HTTP_INTERCEPTORS}  from '@angular/common/http'

import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { StocksComponent } from './pages/stocks/stocks.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleComponent } from './components/title/title.component';
import { StocksCreateComponent } from './pages/stocks-create/stocks-create.component';
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatCardModule } from '@angular/material/card';
import { StocksReadComponent } from './pages/stocks-read/stocks-read.component'
import { MatTableModule } from '@angular/material/table';
import { StocksUpdateComponent } from './pages/stocks-update/stocks-update.component';
import { LoginListComponent } from './pages/login-list/login-list.component';
import { LoginComponent } from './pages/login/login.component';
import { MatMenuModule } from '@angular/material/menu'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StocksComponent,
    HomeComponent,
    TitleComponent,
    StocksCreateComponent,
    StocksReadComponent,
    StocksUpdateComponent,
    LoginListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule, 
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatMenuModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService, 
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
