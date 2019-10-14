import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Item } from '../../models/item';

@Component({
  selector: 'ml-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  products$: Observable<Item>;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
    ) { }

  ngOnInit() {
    this.products$ = this.route.queryParams
      .pipe(
        switchMap(param => this.productsService.getProducts(param.search))
        );
    }

}
