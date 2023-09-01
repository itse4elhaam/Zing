import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  private _cart: Cart = { items: [] };
  itemsQty: number = 0;

  // this private tells us that we only want to ues this in our components not outside, like in the html
  constructor(private cartService: CartService) {}

  @Input()
  get cart(): Cart {
    return this._cart;
  }
  
  set cart(cart: Cart) {
    this._cart = cart;
    
    this.itemsQty = cart.items
    .map((item) => item.quantity)
    .reduce((prev, current) => prev + current, 0);
  }

  getTotal(cart: CartItem[]): number {
    return this.cartService.getTotal(cart);
  }

  onClearCart(){
    return this.cartService.clearCart();
  }
}
