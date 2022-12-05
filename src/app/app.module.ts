import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './users/header/header.component';
import { UtilisateurComponent } from './users/utilisateur/utilisateur.component';
import { InscrptionComponent } from './inscrption/inscrption.component';
//
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UtilisateurComponent,
    InscrptionComponent,
    PageConnexionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
//
    FormsModule,
    ReactiveFormsModule
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
