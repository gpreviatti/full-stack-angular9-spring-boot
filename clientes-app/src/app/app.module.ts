import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './components/template/template.module';
import { HomeComponent } from './components/home/home.component'
import { ClientesModule } from './components/clientes/clientes.module';
import { ClientesService } from './services/clientes.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    HttpClientModule
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
