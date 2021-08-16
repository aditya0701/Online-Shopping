import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { CartDescriptionComponent } from './cart-description/cart-description.component';
import { ComparePageComponent } from './compare-page/compare-page.component';
import { CompareProductComponent } from './compare-product/compare-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDescriptionPageComponent } from './product-description-page/product-description-page.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RetailerProfileComponent } from './retailer-profile/retailer-profile.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateRetailerComponent } from './update-retailer/update-retailer.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'showproducts', component: ProductDescriptionPageComponent },
  { path: 'showcart', component: CartDescriptionComponent },
  { path: 'showItem', component: ComparePageComponent },
  { path: 'compareproducts', component: CompareProductComponent },
  { path: 'productCards', component: ProductCardComponent },
  { path: '', component: UserLoginComponent },
  { path: 'homepage', component: ProductCardComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'user-edit', component: EditUserComponent },
  { path: 'register-user', component: RegisterUserComponent },
  //{ path: '', redirectTo: '/user-login', pathMatch: 'full' },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'retailerpage', component: RetailerProfileComponent },
  { path: 'add-product', component: AddProductsComponent },
  { path: 'delete-product', component: DeleteProductComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'update-product', component: UpdateProductComponent },
  { path: 'update-retailer', component: UpdateRetailerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
