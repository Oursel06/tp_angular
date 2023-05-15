import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  providers: [DatePipe]
})

export class ProductCardComponent implements OnChanges {
  @Input() myproduct!: Product

  constructor(private productsService: ProductsService) {
  }

  onLike() {
    this.productsService.onAddLike(this.myproduct)
  }

  onFavoris() {
    this.productsService.onAddFavoris(this.myproduct)
  }

  // Gestion prix d'origine
  selectprice: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes["myproduct"] && this.myproduct) {
      this.selectprice = this.myproduct.price;
    }
    // if (this.myproduct) {
    //   console.log(this.myproduct)
    //   
    // }
  }

  // Gestion ajout prix dans le local storage
  priceToAdd: number = 0;
  addPriceToLocalStorage() {
    if (this.priceToAdd > 0) {
      // const currentPrice = localStorage.getItem('paniertot') || '0';
      // const newPrice = parseInt(currentPrice, 10) + this.priceToAdd;
      localStorage.setItem('paniertot', (this.priceToAdd + this.selectprice).toString());
      console.log('Prix ajouté au local storage :', this.priceToAdd);
    } else {
      alert('Veuillez au moins sélectionner un article.');
    }
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
      case "vert":
        this.selectprice = this.myproduct.price + 15400;
        break;
      case "jaune":
        this.selectprice = this.myproduct.price + 3500;
        break;
      case "option":
        this.selectprice = this.myproduct.price;
        break;
      default:
        break;
    }
  }
}


