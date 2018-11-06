import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Rocket } from '../models/Rocket.model';
import { delay, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RocketsService {

  readonly delay: number = 1000;

  private rockets = [
    new Rocket(1, 'Ariane 5', 'ESA', 21000, 10865),
    new Rocket(2, 'Atlas 5', 'ULA', 18500, 8700),
    new Rocket(3, 'Falcon 9', 'SPACEX', 15960, 5500),
    new Rocket(4, 'Soyuz ST-B', 'ROSCOSMOS', 9000, 3250),
  ];

  constructor() { }

  getRockets(query = ''): Observable<Rocket[]> {
    return of(this.rockets).pipe(
      map(fetchedRockets =>
        fetchedRockets.filter(
          r => query === ''
          || query === '*'
          || r.name.toLowerCase().indexOf(query.toLowerCase()) >= 0
          || r.origin.toLowerCase().indexOf(query.toLowerCase()) >= 0)),
      delay(this.delay));
  }

  getRocket(id: number): Observable<Rocket> {
    const rocket = this.rockets.find(r => r.id === id);
    if (rocket) { rocket.visited = true; }
    return of(rocket).pipe(delay(this.delay));
  }
}
