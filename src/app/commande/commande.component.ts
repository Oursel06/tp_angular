import { Component } from '@angular/core';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent {
  numeroCommande: string = "";

  // On récupère le numéro de commande en localstorage sinon on en génère un autre
  ngOnInit(): void {
    const numCommandeLocalStorage = localStorage.getItem('numcommande');

    if (numCommandeLocalStorage) {
      this.numeroCommande = numCommandeLocalStorage;
    } else {
      this.generateNumeroCommande();
      localStorage.setItem('numcommande', this.numeroCommande);
    }
  }

  // On génère un numéro de 12 chiffres aléatoires entre 0 et 9
  generateNumeroCommande(): void {
    const chiffres = '0123456789';
    let numero = '';

    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * chiffres.length);
      numero += chiffres.charAt(randomIndex);
    }

    this.numeroCommande = numero;
  }
}
