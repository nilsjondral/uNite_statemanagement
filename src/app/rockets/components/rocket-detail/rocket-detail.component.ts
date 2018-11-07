import { Rocket } from '../../models/rocket.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { rocketsQuery } from 'src/app/state/rockets.selectors';

@Component({
  selector: 'app-rocket-detail',
  templateUrl: './rocket-detail.component.html',
  styleUrls: ['./rocket-detail.component.scss']
})
export class RocketDetailComponent implements OnInit {

  rocket$: Observable<Rocket>;

  constructor (
    private route: ActivatedRoute,
    private store: Store<any>) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.rocket$ = this.store.select(rocketsQuery.getRocket(id * 1));
  }
}
