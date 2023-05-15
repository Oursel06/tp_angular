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
  nbArticle: number = 0;
  prixToAddTot: number = 0;
  addPriceToLocalStorage() {
    if (this.nbArticle > 0) {
      const prixTot = localStorage.getItem('paniertot')
      // Gestion du localstorage du prixtot a null
      if (prixTot !== null) {
        this.prixToAddTot = parseInt(prixTot, 10) + this.nbArticle * this.selectprice;
      }
      else {
        this.prixToAddTot = this.nbArticle * this.selectprice;
      }
      localStorage.setItem('paniertot', this.prixToAddTot.toString());
      console.log('Prix ajouté (prixToAddTot) : ' + this.prixToAddTot);
      console.log('prix total panier (prixTot) : ' + prixTot);
      alert(this.myproduct.title + " (x" + this.nbArticle + ") ajouté au panier.");
    } else {
      alert('Veuillez au moins sélectionner un article.');
    }
  }

  limitinput(event: { target: any; }) {
    const input = event.target;
    const maxLength = 1; // Limite la longueur à 1 caractère

    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength); // Tronque la valeur si elle dépasse la longueur maximale
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


