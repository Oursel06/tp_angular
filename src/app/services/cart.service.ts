// cart.service.ts

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartItems: any[] = [];

    constructor() {
        this.loadCart();
    }

    getCartItems(): any[] {
        this.loadCart();
        return this.cartItems;
    }

    addToCart(item: any): void {
        this.cartItems.push(item);
        this.saveCart();
        this.loadCart();
    }

    removeFromCart(index: number): void {
        if (index >= 0 && index < this.cartItems.length) {
            this.cartItems.splice(index, 1);
            this.saveCart();
        }
    }

    updateCartItem(index: number, quantity: number): void {
        if (index >= 0 && index < this.cartItems.length) {
            this.cartItems[index].quantity = quantity;
            this.saveCart();
        }
    }

    clearCart(): void {
        localStorage.removeItem("panier");
        localStorage.removeItem('totalPrice');
    }

    private saveCart(): void {
        localStorage.setItem('panier', JSON.stringify(this.cartItems));
    }

    private loadCart(): void {
        const cartData = localStorage.getItem('panier');
        if (cartData) {
            this.cartItems = JSON.parse(cartData);
        }
    }
}
