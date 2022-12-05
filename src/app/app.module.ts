import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './users/header/header.component';
import { UtilisateurComponent } from './users/utilisateur/utilisateur.component';
import { ModificationComponent } from './modification/modification.component';
import { SimpleusersComponent } from "./users/simpleusers/simpleusers.component";
// import {NgxPaginationModule} from 'ngx-pagination';

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
        
        /* SimpleusersComponent */
    ]
})
export class AppModule {}
