import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../../../models/produit.model';
import { Observable, map, of } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit {
handleEdit(produit: Produit) {
  this.router.navigateByUrl('/edit-produit/'+produit.id);
}
handlePage(i: number) {
    this.currentPage = i;
    this.GetProduits();

}

  constructor(private ps:ProduitService,private router:Router) { }

  produits! :Array<Produit>;
  totalpages:number=0;
  currentPage:number=1;
  pageSize:number=2 ;


  ngOnInit(): void {
   
    this.GetProduits();
  
  }

  GetProduits(){
    this.ps.getProduits(this.currentPage,this.pageSize,this.keyword).subscribe(
      (response) => {
        this.produits = response.body as Produit[];
        let total = response.headers.get('x-total-count');
        this.totalpages = Math.ceil(Number(total)/this.pageSize);

      },
      (error) => {
        console.log(error);
      }
    );


  }
  handleDeleteProduct(produit: Produit) {
    this.ps.deleteProduct(produit).subscribe(
      {
        next: (produitDeleted) => {
          this.GetProduits();
        }
      }
    );
    }
  
handleCheckedProduct(produit:Produit){
  this.ps.checkProduct(produit).subscribe(
    {
      next: (produitUpdated) => {
        produit.checked = !produit.checked ;
      }
    }
  );
}

public keyword='';
handleSearch(){
  this.ps.getProduits(this.currentPage,this.pageSize,this.keyword).subscribe({
    next: (response) => {
      this.produits = response.body as Produit[];
      let total = response.headers.get('x-total-count');
      this.totalpages = Math.ceil(Number(total)/this.pageSize);
    },
    error: (error) => {
      console.log(error);
    }
  }
    
  )};
  


}
