import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscrptionComponent } from './inscrption/inscrption.component';
import { ModificationComponent } from './modification/modification.component';
import { UtilisateurComponent } from './users/utilisateur/utilisateur.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [

{path:"inscription", component: InscrptionComponent},
{path:"user", component: UtilisateurComponent},

{path:"login", component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
