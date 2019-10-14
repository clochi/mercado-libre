import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';

const routes: Routes = [
  { path: '', component: ProductsPageComponent },
  { path: ':id', component: ProductsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
