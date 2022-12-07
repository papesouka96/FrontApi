import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './users/header/header.component';
import { UtilisateurComponent } from './users/utilisateur/utilisateur.component';
import { ModificationComponent } from './modification/modification.component';
import { CommonModule } from '@angular/common';
import { InscrptionComponent } from './inscrption/inscrption.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UtilisateurComponent,
    ModificationComponent,
    InscrptionComponent,
    LoginComponent,
   /*  Pageconnexion.Component */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    FormsModule, 
   ReactiveFormsModule,
   NgxPaginationModule,
   Ng2SearchPipeModule,
   CommonModule,
  


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
