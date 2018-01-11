import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { PendientesComponent } from '../pendientes/pendientes.component';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  index:number;
  lista:Lista;
  listas : Lista[] = [];

  constructor(
    private navCtrl:NavController,
    private navParams:NavParams,
    private alertCtrl:AlertController,
    private _listaDeseosService:ListaDeseosService
   ) {

     this.index = navParams.get("index");
     this.lista = navParams.get("lista");
    }

  ngOnInit() {}

  actualizar( item:ListaItem ){

    item.completado = !item.completado;

    let todosMarcados = true;
    for ( let item of this.lista.items ) {
        if ( !item.completado ) {
            todosMarcados = false;
            break;
        }
    }
    this.lista.completado = todosMarcados;
    this._listaDeseosService.actualizarData();
    console.log(item)

  }

  borratItem(){

    let confirm = this.alertCtrl.create({
    title: 'Borrar ahora',
    message: '¿Estás seguro de que desea borrar la lista?',
    buttons: ['Cancelar',
      {
        text: 'ok',
        handler: () => {

          this._listaDeseosService.eliminarLista( this.index );
          this.navCtrl.pop();


        }
      }
    ]
    });
    confirm.present();
  }

}
