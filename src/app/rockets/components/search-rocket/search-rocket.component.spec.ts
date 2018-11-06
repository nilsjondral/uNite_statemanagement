import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRocketComponent } from './search-rocket.component';

describe('SearchRocketComponent', () => {
  let component: SearchRocketComponent;
  let fixture: ComponentFixture<SearchRocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
