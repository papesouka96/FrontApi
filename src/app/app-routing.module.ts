import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificationComponent } from './modification/modification.component';
import { PageArchiveComponent } from './page-archive/page-archive.component';
import { ProfilComponent } from './profil/profil.component';
import { UtilisateurComponent } from './users/utilisateur/utilisateur.component';

const routes: Routes = [
{path: "pageArchive" , component: PageArchiveComponent},
{path: "admin", component: UtilisateurComponent},
{path: "profil", component: ProfilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
