import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Celular } from './models/Celulares.model';



@Injectable({
  providedIn: 'root'
})
export class CelularesService {
  getCelular() {
    throw new Error('Method not implemented.');
  }

  private url = "http://localhost:3000/celulares";

  constructor(private _httpClient: HttpClient) {  }

  getCelulares(): Observable<Celular[]>{
    return this._httpClient.get<Celular[]>(this.url);
  }

  cadastrarCelulares(celulares: Celular): Observable<Celular[]>{
    return this._httpClient.post<Celular[]>(this.url,celulares);
  }

  removerCelulares(id:any): Observable<Celular[]>{
    const urlDeletar =`${this.url}/${id}`;
    return this._httpClient.delete<Celular[]>(urlDeletar);
  }

}
