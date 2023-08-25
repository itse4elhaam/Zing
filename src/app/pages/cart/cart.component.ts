import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: CartItem[] = [
    {
      product: 'https://via.placeholder.com/150',
      name: 'iPhone 12',
      quantity: 2,
      price: 899,
      id: 1,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'Dell XPS 13',
      quantity: 1,
      price: 1299,
      id: 2,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'Sony WH-1000XM4',
      quantity: 3,
      price: 349,
      id: 3,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'iPad Pro',
      quantity: 1,
      price: 799,
      id: 4,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'Canon EOS R6',
      quantity: 2,
      price: 2499,
      id: 5,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'LG OLED CX',
      quantity: 1,
      price: 1799,
      id: 6,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'PlayStation 5',
      quantity: 1,
      price: 499,
      id: 7,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'Apple Watch Series 7',
      quantity: 2,
      price: 399,
      id: 8,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'JBL Flip 5',
      quantity: 3,
      price: 99,
      id: 9,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'Samsung Odyssey G7',
      quantity: 1,
      price: 699,
      id: 10,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'AirPods Pro',
      quantity: 2,
      price: 249,
      id: 11,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'Fitbit Charge 4',
      quantity: 1,
      price: 129,
      id: 12,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'Keurig K-Elite',
      quantity: 3,
      price: 149,
      id: 13,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'Vitamix E310',
      quantity: 2,
      price: 349,
      id: 14,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'Dyson V11',
      quantity: 1,
      price: 599,
      id: 15,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'Logitech G Pro X Superlight',
      quantity: 4,
      price: 149,
      id: 16,
    },
  ];

  dataSource: CartItem[] = [];
  displayCols: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  ngOnInit(): void {
    this.dataSource = this.cart;
  }

  getTotal(cart: CartItem[]): number{
    let total = 0;
    for (let item of cart) {
      total += item.price;
      
    }

    return total;
  }
}
