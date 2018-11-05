import { Rocket } from '../../models/rocket.model';
import { Component, OnInit } from '@angular/core';
import { RocketsService } from '../../services/rockets.service';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rocket-detail',
  templateUrl: './rocket-detail.component.html',
  styleUrls: ['./rocket-detail.component.scss']
})
export class RocketDetailComponent implements OnInit {

  public rocket$: Observable<Rocket>;

  constructor(private rocketService: RocketsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(first()).subscribe(params => {
      this.rocket$ = this.rocketService.getRocket(params['id'] * 1);
    });
  }

}
