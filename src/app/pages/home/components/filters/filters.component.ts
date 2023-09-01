import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from '../../../../services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();

  categoriesSubscription: Subscription | undefined;
  categories!: string[];

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService
      .getAllCategories()
      .subscribe((res) => (this.categories = res));
  }

  onCategoryChange(category: string): void {
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void{
    if(this.categoriesSubscription){

      this.categoriesSubscription.unsubscribe();
    }
  };
}


