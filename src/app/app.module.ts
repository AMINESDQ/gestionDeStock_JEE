import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { NewProduitComponent } from './new-produit/new-produit.component';
import { HttpClientModule } from '@angular/common/http';
import { ProduitService } from './services/produit.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProduitComponent } from './edit-produit/edit-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProduitsComponent,
    NewProduitComponent,
    EditProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [
    provideClientHydration(),
    ProduitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
