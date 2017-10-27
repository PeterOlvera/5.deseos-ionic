import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
@Component({
  selector: 'selector',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista:string="";
  nombreItem:string="";
  items:ListaItem[]=[];

  constructor(private _alertCtrl: AlertController, private _navCtrl: NavController, private _listaDeseos: ListaDeseosService) {  }

  ngOnInit() {}

  agregar(){
    if( this.nombreItem.length > 0 ){
        let item = new ListaItem();
        item.nombre = this.nombreItem;
        this.items.push(item);
        this.nombreItem = "";
    }
  }

  borrar( index ){
    this.items.splice( index, 1 );
  }

  guardarLista(){
    if( this.nombreLista.length > 0 ){
      let lista = new Lista(this.nombreLista);
      lista.items = this.items;
      this._listaDeseos.agregarLista( lista );

      this._navCtrl.pop();
    }else{
      let alert = this._alertCtrl.create({
        title: 'Título Vacío',
        subTitle: 'Primero debe ingresar un título para esta lista.',
        buttons: ['OK']
      });
      alert.present();
    }
  }
}
