import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDescriptionPageComponent } from './product-description-page/product-description-page.component';
import { CartDescriptionComponent } from './cart-description/cart-description.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComparePageComponent } from './compare-page/compare-page.component';
import { CompareProductComponent } from './compare-product/compare-product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDescriptionPageComponent,
    CartDescriptionComponent,
    ComparePageComponent,
    CompareProductComponent,
    ProductCardComponent,
    HomepageComponent,
    UserProfileComponent,
    EditUserComponent,
    RegisterUserComponent,
    UserLoginComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
