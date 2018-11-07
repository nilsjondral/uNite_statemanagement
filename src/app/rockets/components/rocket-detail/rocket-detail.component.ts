import { Rocket } from '../../models/rocket.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { rocketsQuery } from 'src/app/state/rockets.selectors';
import { GetRocket } from 'src/app/state/rockets.actions';
import { first, map } from 'rxjs/operators';
import { RocketsService } from '../../services/rockets.service';

@Component({
  selector: 'app-rocket-detail',
  templateUrl: './rocket-detail.component.html',
  styleUrls: ['./rocket-detail.component.scss']
})
export class RocketDetailComponent implements OnInit {

  rocket$: Observable<Rocket>;

  constructor (
    private rocketsService: RocketsService,
    private route: ActivatedRoute,
    private store: Store<any>) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.rocket$ = this.rocketsService.getRocket(id).pipe(map(r => {
      r.visited = true;
      return r;
    }));
  }
}
