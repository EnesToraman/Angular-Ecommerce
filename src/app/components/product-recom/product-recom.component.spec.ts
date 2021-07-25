import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRecomComponent } from './product-recom.component';

describe('ProductRecomComponent', () => {
  let component: ProductRecomComponent;
  let fixture: ComponentFixture<ProductRecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRecomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
