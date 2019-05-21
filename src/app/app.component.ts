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
  filteredProducts: Product[];

  constructor(private getProductsInfoService: GetProductsInfoService) { }
  ngOnInit() {
    this.getProductsInfoService.getProductsData().subscribe((products) => {
      this.products = products;
      this.filteredProducts = this.products;
      console.log(products);
    });
  }

  public searchProducts(searchTerm) {
    this.filteredProducts =  this.products.filter((product: Product) => {
      return (product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    });
  }
}
