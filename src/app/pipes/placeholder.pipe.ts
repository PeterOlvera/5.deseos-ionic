import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder'
})
export class PlaceHolderPipe implements PipeTransform {
  transform(value: string): string {
    let resultado:string = "Nueva Lista";

    if( value ){
      resultado = value;
    }

    return resultado;
  }
}
