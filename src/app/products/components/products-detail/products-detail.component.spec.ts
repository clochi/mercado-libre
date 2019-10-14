import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailComponent } from './products-detail.component';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

describe('ProductsDetailComponent', () => {
  let component: ProductsDetailComponent;
  let fixture: ComponentFixture<ProductsDetailComponent>;
  const list = ['Tecnología, Computación'];
  const activatedRouteSpy = {
    snapshot: {
      paramMap: jasmine.createSpyObj('getParam', ['get'])
    }
  };
  const productServiceSpy = jasmine.createSpyObj('productService', ['getProduct']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDetailComponent, BreadcrumbComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
        { provide: ProductsService, useValue: productServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
