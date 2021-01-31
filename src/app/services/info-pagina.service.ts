import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfoPagina } from './../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;
  equipo: any = {};

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();


  }


  private cargarInfo() {
    //leer el json
    this.http.get('assets/data/data-pagina.json')
      .subscribe((res: InfoPagina) => {
        this.cargada = true;
        this.info = res;
      })
  }

  private cargarEquipo() {
    //leer data de firebase
    this.http.get('https://angular-portafolio-1300c-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((res: any) => {
        // console.log('res => ', res);
        this.equipo = res;
        // this.info = res;
      })
  }
}
