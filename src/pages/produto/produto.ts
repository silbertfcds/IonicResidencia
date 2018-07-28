import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiBarProvider } from './../../providers/api-bar/api-bar';

/**
 * Generated class for the ProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {

  public produto;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public apiBarProvider: ApiBarProvider) {
      this.produto = navParams.get('produto');
  }

  ionViewDidLoad() {
    console.log(this.produto);
  }

  atualizarProduto(){
    this.apiBarProvider.atualizarProduto(this.produto).subscribe(
      data=>{
        console.log(data);
        this.navCtrl.pop();
      }, error=>{
        console.log(error);
      }
    );
  }

}
