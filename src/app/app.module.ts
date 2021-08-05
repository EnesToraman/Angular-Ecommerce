import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralinfoComponent } from './components/generalinfo/generalinfo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryBarComponent } from './components/category-bar/category-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductRowComponent } from './components/product-row/product-row.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryHeaderComponent } from './components/category-header/category-header.component';
import { CategoryProductComponent } from './components/category-product/category-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    AppComponent,
    GeneralinfoComponent,
    HeaderComponent,
    CategoryBarComponent,
    BannerComponent,
    ProductRowComponent,
    FooterComponent,
    HomePageComponent,
    CategoryComponent,
    CategoryHeaderComponent,
    CategoryProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
