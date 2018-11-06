import { Component, OnInit, Input } from '@angular/core';
import { Rocket } from '../../models/Rocket.model';

@Component({
  selector: 'app-rocket-item',
  templateUrl: './rocket-item.component.html',
  styleUrls: ['./rocket-item.component.scss']
})
export class RocketItemComponent implements OnInit {

  @Input() rocket: Rocket;

  constructor() { }

  ngOnInit() {
  }
}
