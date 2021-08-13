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

@NgModule({
  declarations: [
    AppComponent,
    ProductDescriptionPageComponent,
    CartDescriptionComponent,
    ComparePageComponent,
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
