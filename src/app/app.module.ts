import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';

import { PessoaService } from './pessoas/pessoa.service';
import { LancamentoService } from './lancamentos/lancamento.service';

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    ToastModule,

    CoreModule,
    LancamentosModule,
    PessoasModule,

    AppRoutingModule
  ],
  providers: [MessageService, LancamentoService, PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
