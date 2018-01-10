import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  index:number;
  lista:Lista;

  constructor(
    public navCtrl:NavController,
    public navParams:NavParams,
    public _listaDeseosService:ListaDeseosService
   ) {

     this.index = navParams.get("index");
     this.lista = navParams.get("lista");
    }

  ngOnInit() {}

  actualizar( item:ListaItem ){

    item.completado = !item.completado;
    this._listaDeseosService.actualizarData();

  }

  borratItem(){

    

  }
}