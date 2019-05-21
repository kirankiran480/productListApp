import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { GetProductsInfoService } from './get-products-info.service';
import { ProductsListComponent } from './products-list/products-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GetProductsInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
