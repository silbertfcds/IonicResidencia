import { ApiBarProvider } from './../../providers/api-bar/api-bar';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    ApiBarProvider
  ]
})
export class HomePage {

  public produto = {
    title: '',
    description: '',
    slug: 'teste',
    active: true,
    price: '',
    tags: ["eu","tu","ele"]
  }
  
  public listaProdutos = new  Array<any>();

  constructor(
    public navCtrl: NavController, 
    public apiBarProvider: ApiBarProvider) {
  }

  ionViewDidLoad(){
    this.getListarProdutos();
  }

  getListarProdutos(){
    this.apiBarProvider.getProduto().subscribe(
      data =>{
        const response = (data as any);
        this.listaProdutos = response;
        console.log(data);
      }, error =>{
        console.log(error);
      }
    );
  }

  adicionarProduto(){
    console.log(this.produto);
    this.apiBarProvider.cadastrarProduto(this.produto).subscribe(
      data=>{
        console.log(data);
        this.produto = {
          title: '',
          description: '',
          slug: 'teste',
          active: true,
          price: '',
          tags: ["silbert","aranha","jurisprudencia"]
        };
        this.getListarProdutos();
      },error=>{
        console.log(error);
      }
    );
  }

}
