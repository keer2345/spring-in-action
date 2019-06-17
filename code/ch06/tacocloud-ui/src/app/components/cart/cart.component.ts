import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    private httpClient: HttpClient) {
    this.cartService = cartService
  }

  ngOnInit() {
  }

  get cartItems() {
    return this.cartService.getItemsInCart()
  }
  get cartTotal() {
    return this.cartService.getCartTotal()
  }

  onSubmit() {
    this.cartService.getItemsInCart().forEach(cartItem => {
      this.model.tacos.push(cartItem.taco)
    })

    this.httpClient.post(
      'http://localhost:8080/orders',
      this.model, {
        headers: new HttpHeaders().set('Content-type', 'application/json')
          .set('Accept', 'application/json'),
      }).subscribe(r => this.cartService.emptyCart())
  }

}
