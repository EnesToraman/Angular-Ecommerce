import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities-service/utilities.service';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service/product.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {

  private productList: Product[] = [];

  public displayedProducts: Product[] = [];

  constructor(private productService: ProductService, private utilitiesService: UtilitiesService) {
    this.productService.getProduct().subscribe(productList => {
      this.productList = productList;
      this.displayedProducts = productList;
    });
    this.utilitiesService.searchQuerySubject$.subscribe(searchQuery => {
      this.filterProducts(searchQuery);
    });
  }

  ngOnInit(): void { }

  private filterProducts(query: string): void {
    this.displayedProducts = this.productList.filter(function (el) {
      return el.title.toLowerCase().includes(query.toLowerCase());
    });
  }

}
