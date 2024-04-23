import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-new-produit',
  templateUrl: './new-produit.component.html',
  styleUrl: './new-produit.component.css'
})
export class NewProduitComponent implements OnInit {

  constructor(private fb:FormBuilder,private ps:ProduitService ) { }
  public productform!:FormGroup;
  ngOnInit(): void {
    this.productform = this.fb.group({
      id:[''],
      name:[''],
      price:[''],
      quantity:[''],
      checked:[false]
    });
  }
  saveProduct(product:any){ 
    this.ps.saveProduct(product).subscribe(
      {
        next: (produit) => {
          this.productform = this.fb.group({
            id:[''],
            name:[''],
            price:[''],
            quantity:[''],
            checked:[false]
          });
        }
      }
    );
  }

}
