import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../../../models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }
  checkProduct(produit:any){
    return this.http.patch('http://localhost:8089/produits/'+produit.id, {checked:!produit.checked});
  }
  deleteProduct(produit:any){
    return this.http.delete<Produit>('http://localhost:8089/produits/'+produit.id);
  }
  saveProduct(produit:any){
    return this.http.post<Produit>('http://localhost:8089/produits',produit);
  }
  getProduits(page:number=1,limit:number=4,search:string=""){ 
    return this.http.get(`http://localhost:8089/produits?_page=${page}&_limit=${limit}&name_like=${search}`, {observe:'response'});
  }
  getProduitById(id:number) : Observable<Produit> {
    return this.http.get<Produit>('http://localhost:8089/produits/'+id);
  }
  updateProduct(produit:any){
    return this.http.put<Produit>('http://localhost:8089/produits/'+produit.id,produit);
  }
}
