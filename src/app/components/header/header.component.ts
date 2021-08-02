import { Component, OnInit } from '@angular/core';
import { faStaylinked } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { UtilitiesService } from 'src/app/services/utilities-service/utilities.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public companyLogo = faStaylinked;
  public searchBarLogo = faSearch;
  public userLogo = faUser;
  public shoppingCartLogo = faShoppingCart;


  constructor(private utilitiesService: UtilitiesService) {}

  ngOnInit(): void {
  }


  sendTheNewValue(event: any) {
    const searchQuery: string = event.target.value;
    this.utilitiesService.searchQuerySubject$.next(searchQuery);
  }
}

