import { RocketsListComponent } from './components/rockets-list/rockets-list.component';
import { RocketDetailComponent } from './components/rocket-detail/rocket-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'rockets/', component: RocketsListComponent },
  { path: 'rockets/:id', component: RocketDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RocketsRoutingModule { }
