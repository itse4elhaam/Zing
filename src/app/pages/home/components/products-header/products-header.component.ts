import { Component, EventEmitter, Output } from '@angular/core';

type Sort = 'desc' | 'asc';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css'],
})
export class ProductsHeaderComponent {
  @Output() colsCountChange = new EventEmitter<number>();
  sort: Sort = 'desc';
  itemsShowCount: number = 12;

  onSortChange(newSort: Sort): void {
    console.log(newSort);
    this.sort = newSort;
  }

  onItemsChange(count: number): void {
    this.itemsShowCount = count;
  }

  onColsChange(colsNum: number): void {
    this.colsCountChange.emit(colsNum);
  }
}
