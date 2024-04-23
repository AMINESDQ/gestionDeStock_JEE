import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentAction: any;
setCurrentAction(action: any) {
    this.currentAction = action;
}
  title= 'gestion_stock';
  actions: Array<any> = [
    {name: 'Home', link: 'home' ,icons:'house'}, 
    {name: 'Produits', link: 'produits',icons:'cart'},
    {name: 'New Produit', link: 'new-produit',icons:'plus-circle'}
  ]
}
