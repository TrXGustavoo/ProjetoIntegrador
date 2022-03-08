import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListarCComponent } from './listar-c/listar-c.component';
import { RouterModule } from '@angular/router';
import { CadastrarCComponent } from './cadastrar-c/cadastrar-c.component';
import { RodapeComponent } from './rodape/rodape.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MenuIComponent } from './menu-i/menu-i.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ListarCComponent,
    CadastrarCComponent,
    RodapeComponent,
    MenuIComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
