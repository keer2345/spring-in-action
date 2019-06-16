import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = []

  constructor() { this.items = [] }

  getItemsInCart() {
    return this.items;
  }
  getCartTotal() {
    let total = 0
    this.items.forEach(item => {
      total = total + item.lineTotal;
    })
    return total
  }
  addToCart(taco: any) {
    this.items.push(new CartItem(taco))
  }
  emptyCart() {
    this.items = []
  }
}
