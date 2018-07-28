import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiBarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiBarProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiBarProvider Provider');
  }

  public cadastrarProduto(objeto) {
    return this.http.post('/api/products',objeto);
  }

  public getProdutos(){
    return this.http.get('/api/products/');
  }

  public findProduto(id){
    return this.http.get('/api/products/admin/'+id);
  }

  public deleteProduto(id){
    return this.http.delete('/api/products',id);
  }

  public atualizarProduto(produto){
    console.log("produto id:"+produto._id);
    return this.http.put('/api/products/'+produto._id,produto);
  }

}
