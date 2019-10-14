import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { ItemDetail } from '../../models/item-details';
@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {
  product$: Observable<ItemDetail>;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.product$ = this.productsService.getProduct(id);
  }

}
