import { Component, OnInit } from '@angular/core';
import { GetProductsInfoService } from './get-products-info.service';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'productsDisplayApp';
  products: Product[];

  constructor(private getProductsInfoService: GetProductsInfoService) { }
  ngOnInit() {
    this.getProductsInfoService.getProductsData().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }
}
