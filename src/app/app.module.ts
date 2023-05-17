import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { FormsModule } from '@angular/forms';
import { SortByNamePipe } from './pipes/sort-by-name.pipe';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { PaiementComponent } from './paiement/paiement.component';
import { CommandeComponent } from './commande/commande.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    SortByDatePipe,
    SortByNamePipe,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    AboutComponent,
    PaiementComponent,
    CommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    FormsModule
  ],
  providers: [{ 
    provide: LOCALE_ID, 
    useValue: "fr-FR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
