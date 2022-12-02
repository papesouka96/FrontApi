import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscrptionComponent } from './inscrption/inscrption.component';

const routes: Routes = [
  { path: 'inscription', component: InscrptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
