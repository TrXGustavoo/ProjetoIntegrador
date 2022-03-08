import { Component, OnInit } from '@angular/core';
import { CelularesService } from '../celulares.service';
import { Celular } from '../models/Celulares.model';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public celulares: Celular[] = [];


  constructor(private _celularesService: CelularesService) { }

  ngOnInit(): void {
    this.listarCelulares();
  }

  listarCelulares(){
    this._celularesService.getCelulares()
      .subscribe(
        retornaCelular => {
          this.celulares = retornaCelular.map(
            item=>{
              return new Celular(
                item.id,
                item.nome,
                item.foto,
                item.descricao,
                item.preco
              );
            }
          )
        }
      )
  }

}
