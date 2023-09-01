import { Component, EventEmitter, Output } from '@angular/core';

type Sort = 'desc' | 'asc';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css'],
})
export class ProductsHeaderComponent {
  @Output() colsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  sort: Sort = 'desc';
  itemsShowCount: number = 12;

  onSortChange(newSort: Sort): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsChange(count: number): void {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  }

  onColsChange(colsNum: number): void {
    this.colsCountChange.emit(colsNum);
  }
}
