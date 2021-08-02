import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service/product.service';
import { Product } from '../../models/product'

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

  public productList: Product[] = [];

  
  constructor(private productService: ProductService) {
    this.productService.getProduct().subscribe(productList => {
      this.productList = productList;
    });
  }

  ngOnInit(): void { }

}
