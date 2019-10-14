import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';

describe('ProductsService', () => {
  const httpSpy = jasmine.createSpyObj('httpClient', ['get']);
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ {provide: HttpClient, useValue: httpSpy} ]
  }));

  it('should be created', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });
});
