import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanloadItemsGuard } from './guards/canload-items.guard';

const routes: Routes = [
  {
    path: 'items',
    canLoad: [CanloadItemsGuard],
    loadChildren: './products/products.module#ProductsModule'
  },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
