import { ChangeDetectorRef, Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private cartService: CartService, private cdRef: ChangeDetectorRef) {
    this.cartItems = this.cartService.getCartItems();
  }

  cartItems: any[];
  totalPrice: number = 0
  itemStorage = localStorage.getItem('panier');

  ngOnInit(): void {
    this.loadCartItems();
    this.calculateTotalPrice();
  }

  updateQuantity(index: number, quantity: number): void {
    this.cartItems[index].quantity = quantity;
    this.calculateTotalPrice();
    this.cartService.updateCartItem(index, quantity);
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    localStorage.setItem('totalPrice', this.totalPrice.toString());
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeProduct(index: number): void {
    this.cartService.removeFromCart(index);
    this.loadCartItems();
    this.calculateTotalPrice();
  }

  clearCart(): void {
    localStorage.clear();
    this.cartItems = [];
    this.calculateTotalPrice();
  }
}
