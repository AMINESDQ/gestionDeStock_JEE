import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { NewProduitComponent } from './new-produit/new-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'new-produit', component: NewProduitComponent },
  { path:'edit-produit/:id', component: EditProduitComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
