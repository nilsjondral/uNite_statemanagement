import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-rocket',
  templateUrl: './search-rocket.component.html',
  styleUrls: ['./search-rocket.component.scss']
})
export class SearchRocketComponent {
  @Input() query = '';
  @Input() searching = true;
  @Output() search = new EventEmitter<string>();
}
