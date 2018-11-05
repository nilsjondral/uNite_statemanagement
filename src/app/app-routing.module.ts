import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RocketsListComponent } from './rockets/Components/rockets-list/rockets-list.component';

const routes: Routes = [{ path: '', component: RocketsListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
