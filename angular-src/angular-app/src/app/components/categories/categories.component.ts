import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/models';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @Input() categories: Category[];
  @Output() selectedCategory = new EventEmitter<Category>();



  select_category(category: Category) {
    this.selectedCategory.emit(category);
    console.log(category)
  }



}
