import { RocketsRoutingModule } from './rockets-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketsListComponent } from './Components/rockets-list/rockets-list.component';
import { RocketItemComponent } from './components/rocket-item/rocket-item.component';
import { RocketDetailComponent } from './components/rocket-detail/rocket-detail.component';
import { RocketsService } from './services/rockets.service';
import { SearchRocketComponent } from './components/search-rocket/search-rocket.component';

@NgModule({
  declarations: [
    RocketsListComponent,
    RocketItemComponent,
    RocketDetailComponent,
    SearchRocketComponent],
  imports: [
    CommonModule,
    RouterModule,
    RocketsRoutingModule
  ],
  exports: [
    RocketsListComponent
  ],
  providers: [RocketsService]
})
export class RocketsModule { }
