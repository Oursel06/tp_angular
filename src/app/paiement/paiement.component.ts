import { Component } from '@angular/core';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})

export class PaiementComponent {

  paiementTot = localStorage.getItem('totalPrice');

  // Gestion achat
  paiementOk: Boolean = false;
  titulaire: string = "";
  numCard: string = "";
  dateExpiration: string = "";
  cvcvv: string = "";

  // On vérifie si tous les champs sont remplis pour débloquer le bouton "commander"
  checkFields(): void {
    if (this.titulaire && this.numCard && this.dateExpiration && this.cvcvv) {
      this.paiementOk = true;
    } else {
      this.paiementOk = false;
    }
  }
}
