import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { ListarCComponent } from '../listar-c/listar-c.component';
import { CadastrarCComponent } from '../cadastrar-c/cadastrar-c.component';
import { MenuIComponent } from '../menu-i/menu-i.component';

const rotas: Routes = [
  {path: 'home', component: HomepageComponent },
  {path: 'listar', component: ListarCComponent },
  {path: 'gerenciamento', component: CadastrarCComponent },
  {path: 'menu', component: MenuIComponent},
  {path: '', redirectTo: '/menu', pathMatch:'full'}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
