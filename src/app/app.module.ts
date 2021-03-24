import { RelatoriosRoutingModule } from './relatorios/relatorios-routing.module';
import { RelatoriosModule } from './relatorios/relatorios.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';



registerLocaleData(localePt); // Para arrumar o modo dos numeros, ponto e virgula

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    CoreModule,
    LancamentosModule,
    PessoasModule,
    SegurancaModule,

    DashboardModule,
    RelatoriosModule,
    RelatoriosRoutingModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
