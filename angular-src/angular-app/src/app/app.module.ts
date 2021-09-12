import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OffersComponent } from './components/offers/offers.component';
import { OfferDetailsComponent } from './components/offer-details/offer-details.component';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    OfferDetailsComponent,
    CategoriesComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
