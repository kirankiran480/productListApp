import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnChanges {
   @Input() products: Product[];
  config: { currentPage: number; itemsPerPage: number; };
  constructor() {
    this.config = {
      currentPage: 1,
      itemsPerPage: 10
      };
   }

  ngOnChanges() {
    this.sortbyPopularity();
  }
  pageChange(newPage: number) {
   this.config.currentPage = newPage;
  }

  sortbyPopularity() {
    if (this.products) {
      this.products.sort((a, b) => {
        return a.popularity - b.popularity;
    });
  }
  }
}
