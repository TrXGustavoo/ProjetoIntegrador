import { Component, OnInit } from '@angular/core';
import { Celular } from '../models/Celulares.model';
import { CelularesService } from '../celulares.service';

@Component({
  selector: 'app-cadastrar-c',
  templateUrl: './cadastrar-c.component.html',
  styleUrls: ['./cadastrar-c.component.css']
})
export class CadastrarCComponent implements OnInit {

  public celular: Celular = new Celular(0,"","","",0);

  constructor(private _CelularesService: CelularesService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this._CelularesService.cadastrarCelulares(this.celular).subscribe(
      celulares => {this.celular = new Celular(0,"","","",0)},
      err => {console.log('erro ao cadastrar')}
    );

    window;location.href = "/mural";

  }
  excluir(id: number){
    this._CelularesService.removerCelulares(id).subscribe(
      celulares => {this.celular = new Celular(0,"","","",0)},
      err => {console.log("Erro ao excluir")}
    );

    window.location.href = "/mural";
  } 


  

  
  
}
