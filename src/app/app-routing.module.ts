import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificationComponent } from './modification/modification.component';
import { UtilisateurComponent } from './users/utilisateur/utilisateur.component';

const routes: Routes = [
{
  path: "recup" , component: ModificationComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
