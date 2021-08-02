import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-header',
  templateUrl: './category-header.component.html',
  styleUrls: ['./category-header.component.css']
})
export class CategoryHeaderComponent implements OnInit {

  Home = faHome
  Arrow = faChevronRight

  constructor() { }

  ngOnInit(): void {
  }

}
