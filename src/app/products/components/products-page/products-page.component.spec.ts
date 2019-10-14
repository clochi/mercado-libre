import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPageComponent } from './products-page.component';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { ProductComponent } from '../product/product.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsService } from '../../services/products.service';

describe('ProductsPageComponent', () => {
  let component: ProductsPageComponent;
  let fixture: ComponentFixture<ProductsPageComponent>;
  const productServiceSpy = jasmine.createSpyObj('productsService', ['getProducts']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsPageComponent, BreadcrumbComponent, ProductComponent ],
      providers: [ { provide: ProductsService, useValue: productServiceSpy } ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
