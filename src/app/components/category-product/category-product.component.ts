import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities-service/utilities.service';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service/product.service';
import { Options } from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {

  private productList: Product[] = [];

  public displayedProducts: Product[] = [];

  public firstValue: number = 0;

  public lastValue: number = 100;

  public options: Options = {
    floor: 0,
    ceil: 100
  };

  public searchQuery: string = "";

  constructor(private productService: ProductService, private utilitiesService: UtilitiesService) {
    this.productService.getProduct().subscribe(productList => {
      this.productList = productList;
      this.displayedProducts = productList;
      this.setSliderValues();
    });
    this.utilitiesService.searchQuerySubject$.subscribe(searchQuery => {
      this.searchQuery = searchQuery;
      this.filterByBoth(this.searchQuery, this.firstValue, this.lastValue);
    });
  }

  ngOnInit(): void { }

  private filterByBoth (searchQuery: string, firstSliderValue: number, lastSliderValue: number): void {
    this.displayedProducts = this.filterByQuery(this.productList, searchQuery);
    this.displayedProducts = this.filterByPrice(this.displayedProducts, firstSliderValue, lastSliderValue);
  }

  private filterByQuery(products: Product[], query: string): Product[] {
    return products.filter(function (el) {
      return el.title.toLowerCase().includes(query.toLowerCase());
    });
  }

  private filterByPrice(products: Product[],minPrice: number, maxPrice: number): Product[] {
    return products.filter(function (a) {
      return a.price >= minPrice && a.price <= maxPrice;
    });
  
  }

  getFirstValue(value: number) {
    this.firstValue = value
    this.filterByBoth(this.searchQuery, this.firstValue , this.lastValue)
  }

  getLastValue(value: number) {
    this.lastValue = value
    this.filterByBoth(this.searchQuery, this.firstValue , this.lastValue)
  }

  private getMinMax(products: Product[], operation: string): number {
    if (operation === "min") {
      return products.reduce(function (prev, curr) {
        return prev.price < curr.price ? prev : curr;
      }).price;
    } else if (operation === "max") {
      return products.reduce(function (prev, curr) {
        return prev.price > curr.price ? prev : curr;
      }).price;
    }
    return 0;
  }

  private setSliderValues(): void {
    this.firstValue = this.getMinMax(this.displayedProducts, "min");
    this.lastValue = this.getMinMax(this.displayedProducts, "max");
    this.options = {
      floor: this.getMinMax(this.displayedProducts, "min"),
      ceil: this.getMinMax(this.displayedProducts, "max")
    };
  }

  

}
