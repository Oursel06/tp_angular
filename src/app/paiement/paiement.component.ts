import { Component } from '@angular/core';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})

export class PaiementComponent {
  paiementTot = localStorage.getItem('paniertot');

  // Gestion achat
  titulaire: string = "";
  numCard: string = "";
  dateExpiration: string = "";
  cvcvv: string = "";
  paiementCard() {
    if (this.titulaire != "" && this.numCard != null && this.dateExpiration != "" && this.cvcvv != null) {
      alert(this.titulaire + this.dateExpiration + this.cvcvv + this.numCard);
    } else {
      alert('Veuillez remplir les champs ci dessus.');
    }
  }

}
