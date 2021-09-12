import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Offer, Category } from 'src/app/models';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit, OnChanges {
  @Input() offer: Offer;
  category: Category = null;
  constructor(private apiService: ApiServiceService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.offer != null) {
      this.apiService.get_category(this.offer.category).subscribe(
        (category: Category) => {
          this.category = category;
        },
        error => { console.log(error); }
      );

    }


  }

  ngOnInit(): void {
    if (this.offer != null) {
      this.apiService.get_category(this.offer.category).subscribe(
        (category: Category) => {
          this.category = category;
        },
        error => { console.log(error); }
      );
      console.log(this.category)
    }


  }




}
