import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Offer } from 'src/app/models';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
  @Input() offers: Offer[];
  @Output() selectedOffer = new EventEmitter<Offer>();



  select_offer(offer) {
    this.selectedOffer.emit(offer);

  }
}
