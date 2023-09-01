import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from '../../services/cart.service';
import { StoreService } from '../../services/store.service';
import { Subscription } from 'rxjs';

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
export class HomeComponent implements OnInit, OnDestroy {
  cols: number = 3;
  rowHeight: number = ROW_HEIGHTS[this.cols];
  category!: string;
  products: Product[] | undefined;
  sort = 'desc';
  itemsCount = 12;
  productsSubscription: Subscription | undefined;

  constructor(
    private cartService: CartService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.storeService
      .getAllProducts(this.itemsCount, this.sort, this.category)
      .subscribe((_products) => {
        this.products = _products;
      });
  }

  onColsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHTS[this.cols];
  }



  // this naming convention is used because the placeholder api is using the same one
  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getProducts();
  }

  onSortChange(newSort: string): void{
    this.sort = newSort
    this.getProducts();
  }
  
  onItemsCountChange(newItemsCount: number): void{
    this.itemsCount = newItemsCount;
    this.getProducts();
  }

  // this prevents memory leaks
  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
