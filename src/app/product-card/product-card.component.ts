import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  providers: [DatePipe]
})

export class ProductCardComponent implements OnInit {
  @Input() myproduct!: Product
  onAddLike() {
    if (this.myproduct.isLiked) {
      this.myproduct.like--
    }
    else {
      this.myproduct.like++
    }
    this.myproduct.isLiked = !this.myproduct.isLiked;
  }

  // Gestion prix d'origine
  selectprice: number = 0;

  ngOnInit() {
    this.selectprice = this.myproduct.price
  }

  selected = "";
  changecolor(value: any) {
    // this select prend la couleur selectionnée
    this.selected = value.target.value;

    // change le prix en fonction de la couleur selectionnée
    switch (this.selected) {
      case "noir":
        this.selectprice = this.myproduct.price + 5500;
        break;
      case "blanc":
        this.selectprice = this.myproduct.price - 2500;
        break;
      case "rouge":
        this.selectprice = this.myproduct.price + 6750;
        break;
      case "orange":
        this.selectprice = this.myproduct.price - 7450;
        break;
      case "gris":
        this.selectprice = this.myproduct.price + 2650;
        break;
      case "bleu":
        this.selectprice = this.myproduct.price + 9500;
        break;
      case "option":
        this.selectprice = this.myproduct.price;
        break;
      default:
        break;
    }
  }
}


