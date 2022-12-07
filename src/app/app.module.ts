import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './users/header/header.component';
import { UtilisateurComponent } from './users/utilisateur/utilisateur.component';
import { ModificationComponent } from './modification/modification.component';
<<<<<<< HEAD
import { SimpleusersComponent } from "./users/simpleusers/simpleusers.component";
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
 

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UtilisateurComponent,
        ModificationComponent,
        SimpleusersComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        FormsModule,
        ReactiveFormsModule,
       
        NgxPaginationModule,
        CommonModule,
        Ng2SearchPipeModule

    ]
=======
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
>>>>>>> 7aff8e3f23fc1aed07aa164acfe9b59dd23708ba
})
export class AppModule {}
