import { Rocket } from '../../models/rocket.model';
import { Observable } from 'rxjs';
import { RocketsService } from '../../services/rockets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rockets-list',
  templateUrl: './rockets-list.component.html',
  styleUrls: ['./rockets-list.component.scss']
})
export class RocketsListComponent implements OnInit {

  public rockets: Observable<Rocket[]>;

  constructor(private rocketsService: RocketsService) { }

  ngOnInit() {
    this.rockets = this.rocketsService.getRockets();
  }

}
