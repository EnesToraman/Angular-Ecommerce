import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../../get-api.service';

@Component({
  selector: 'app-product-recom',
  templateUrl: './product-recom.component.html',
  styleUrls: ['./product-recom.component.css']
})
export class ProductRecomComponent implements OnInit {

  data:any;

  constructor( private api: GetApiService ) {

  }

  ngOnInit(): void {
    this.api.apiCall().subscribe((data) => {
    this.data = data
    })
  }

}
