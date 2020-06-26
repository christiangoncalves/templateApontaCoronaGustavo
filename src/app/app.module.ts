import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialFormComponent } from './pages/initial-form/initial-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardProdutoComponent } from './components/card-produto/card-produto.component';
import { SwiperModule } from 'ngx-swiper-wrapper'

@NgModule({
  declarations: [
    AppComponent,
    InitialFormComponent,
    InicioComponent,
    CardProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
