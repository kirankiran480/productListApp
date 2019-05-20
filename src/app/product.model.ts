export class Product {
  subcategory: string;
  title: string;
  price: number;
  popularity: number;
  constructor(response: any) {
       this.subcategory = response.subcategory;
       this.title = response.title;
       this.price = parseFloat(response.price);
       this.popularity = parseFloat(response.popularity);
  }
}
