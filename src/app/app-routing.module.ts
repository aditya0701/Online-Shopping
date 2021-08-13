import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDescriptionComponent } from './cart-description/cart-description.component';
import { ComparePageComponent } from './compare-page/compare-page.component';
import { ProductDescriptionPageComponent } from './product-description-page/product-description-page.component';

const routes: Routes = [
  { path: 'showproducts', component: ProductDescriptionPageComponent },
  { path: 'showcart', component: CartDescriptionComponent },
  { path: 'showItem', component: ComparePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
