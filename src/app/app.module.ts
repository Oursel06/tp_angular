import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SortBtDatePipe } from './sort-bt-date.pipe';
import { FormsModule } from '@angular/forms';
import { SortByNamePipe } from './sort-by-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    SortBtDatePipe,
    SortByNamePipe
  ],
  exports: [
    SortBtDatePipe,
    SortByNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
