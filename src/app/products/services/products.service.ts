import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Item } from '../models/item';
import { ItemDetail } from '../models/item-details';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(q: string) {
    return this.http.get(`${environment.api}items?q=${q}`) as Observable<Item>;
  }

  getProduct(id: string) {
    return this.http.get(`${environment.api}items/${id}`) as Observable<ItemDetail>;
  }

}
