import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class GetProductsInfoService {

  constructor(private http: HttpClient) { }
  getProductsData(){
     return this.http.get('/assets/products.json')
     .pipe(map((response: any) => {
        return Object.keys(response.products).map((id)=>{
           return new Product(response.products[id]);
        })
     }));
  }
}
