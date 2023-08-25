import { Component } from '@angular/core';

interface RowHeights {
  [id: number]: number;
}

const ROW_HEIGHTS: RowHeights = {
  1: 400,
  3: 335,
  4: 445,
};


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cols: number = 3;
  rowHeight: number = ROW_HEIGHTS[this.cols];
  category!: string;

  onColsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHTS[this.cols];

  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
