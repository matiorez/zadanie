import { Component, OnInit } from '@angular/core';
import { Offer, Category } from './models';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  offers = [];
  categories = [];
  selected_category: Category = null
  selected_offer: Offer = null;

  constructor(private apiService: ApiServiceService) { }
  get_filtered_offers() {
    if (this.selected_category != null) {
      this.apiService.get_Offers_with_category(this.selected_category.id).subscribe(
        (offers: Offer[]) => {
          this.offers = offers;
        },
        error => { console.log(error); }
      );
    }
    else {
      this.apiService.get_Offers().subscribe(
        (offers: Offer[]) => {
          this.offers = offers;
        },
        error => { console.log(error); }
      );
    }
  }
  ngOnInit(): void {
    this.get_filtered_offers();
    /**/
    this.apiService.get_Categories().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      },
      error => { console.log(error); }
    );
  }
  select_offer(offer: Offer) {
    this.selected_offer = offer;
  }
  select_category(category: Category) {
    this.selected_category = category;
    this.get_filtered_offers();
  }

}
