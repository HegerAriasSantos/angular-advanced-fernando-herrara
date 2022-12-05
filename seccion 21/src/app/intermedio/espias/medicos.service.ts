import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MedicosService {

  constructor( public http: Http ) { }

  getMedicos() {
    return this.http.get('...')
                .map( resp => resp['medicos'] );
  }

  agregarMedico( medico: any ) {
    return this.http.post('...', medico )
                .map( resp => resp['medico'] );
  }

  borrarMedico( id: string ) {
    return this.http.delete('...' )
                .map( resp => resp['medico'] );
  }


}
