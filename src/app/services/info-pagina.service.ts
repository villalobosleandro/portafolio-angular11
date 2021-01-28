import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfoPagina } from './../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  constructor(private http: HttpClient) { 
    // console.log('servicio info pagina cargada');

    //leer el json
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (res: InfoPagina) => {
        console.log('res => ', res);
        this.cargada = true;
        this.info = res;
      })
    
  }
}