import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Produit } from '../../../models/produit.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrl: './edit-produit.component.css'
})
export class EditProduitComponent {
  constructor(private fb:FormBuilder,private ps:ProduitService ,private activatedroute:ActivatedRoute,private route:Router) { }
  public productform!:FormGroup;
  produitId=this.activatedroute.snapshot.params['id'];
  ngOnInit(): void {
    this.ps.getProduitById(this.produitId).subscribe(
      (produit) => {
        this.productform = this.fb.group({
          id:[produit.id],
          name:[produit.name],
          price:[produit.price],
          quantity:[produit.quantity],
          checked:[produit.checked]
        });
      }
    );
    
  }
  
  updateProduct(product:any){ 
    this.ps.updateProduct(product).subscribe(
      {
        next: (produit) => {
         this.route.navigateByUrl('/produits');
        }
      }
    );
  }

}
