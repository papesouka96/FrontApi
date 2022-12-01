import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './users/header/header.component';
import { UtilisateurComponent } from './users/utilisateur/utilisateur.component';
import { MatieresComponent } from './matieres/matieres.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UtilisateurComponent,
    MatieresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
