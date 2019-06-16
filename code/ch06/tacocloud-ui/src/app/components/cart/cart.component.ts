import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'taco-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  model = {
    deliveryName: '',
    deliveryStreet: '',
    deliveryState: '',
    deliveryZip: '',
    ccNumber: '',
    ccExpiration: '',
    ccCVV: '',
    tacos: []
  }

  constructor(private cartService: CartService,
    private httpClicent: HttpClient) {
    this.cartService = cartService
  }

  ngOnInit() {
  }

  get cartItems(){
    return  this.cartService.getItemsInCart()
  }
  get cartTotal(){
    return this.cartService.getCartTotal()
  }


}
