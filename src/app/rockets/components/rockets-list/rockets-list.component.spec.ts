import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketsListComponent } from './rockets-list.component';

describe('RocketsListComponent', () => {
  let component: RocketsListComponent;
  let fixture: ComponentFixture<RocketsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
