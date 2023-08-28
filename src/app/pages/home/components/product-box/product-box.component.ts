import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css'],
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;

  product: Product = {
    id: 1,
    title: 'Laptop',
    price: 999,
    category: 'Electronics',
    description: 'Powerful laptop for all your computing needs.',
    image: 'https://via.placeholder.com/150',
  };

  @Output() addToCart = new EventEmitter();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
