import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ProductComponent } from './product.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Product } from '../../models/product';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  const product: Product = {
    condition: 'new',
    free_shipping: true,
    id: 'ML234234',
    picture: 'none.jpg',
    price: {
      amount: 1329,
      decimals: 38,
      currency: 'ARS'
    },
    title: 'Teléfono',
    ubication: 'Córdoba'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = product;
    component.borderBottom = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render with border bottom', () => {
    const productComponent: HTMLElement = fixture.nativeElement.querySelector('.product');

    expect(productComponent.classList.contains('product--border')).toBeTruthy();
  });

  it('should render without border bottom', () => {
    component.borderBottom = false;
    fixture.detectChanges();
    const productComponent: HTMLElement = fixture.nativeElement.querySelector('.product');

    expect(productComponent.classList.contains('product--border')).toBeFalsy();
  });

});
