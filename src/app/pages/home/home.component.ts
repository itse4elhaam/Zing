import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from '../../services/cart.service';

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

  constructor(private cartService: CartService){}

  onColsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHTS[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  // this naming convention is used because the placeholder api is using the same one
  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    })
  }
}
