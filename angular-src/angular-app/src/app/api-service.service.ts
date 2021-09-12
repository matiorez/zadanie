import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Offer, Category } from './models';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl = 'http://127.0.0.1:8000/';
  baseOfferUrl = `${this.baseUrl}api/offers/`;
  baseCategoryUrl = `${this.baseUrl}api/category/`;

  constructor(private httpClient: HttpClient) { }

  get_Offers(): Observable<Offer[]> {
    return this.httpClient.get<Offer[]>(`${this.baseOfferUrl}`).pipe(tap(x => console.log("get_offers", x)));
  }
  get_Offers_with_category(category_id: number): Observable<Offer[]> {
    return this.httpClient.get<Offer[]>(`${this.baseOfferUrl}?category=${category_id}`).pipe(tap(x => console.log("get_Offers_with_category", x)));
  }
  get_category(category_id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${this.baseCategoryUrl}${category_id}`).pipe(tap(x => console.log("get_category", x)));
  }
  get_Categories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.baseCategoryUrl}`).pipe(tap(x => console.log("get_categories", x)));
  }
}
