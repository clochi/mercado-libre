import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  @Input() borderBottom: boolean;
  constructor(private router: Router) { }

  showProduct(id) {
    this.router.navigate([`items/${id}`]);
  }
}
