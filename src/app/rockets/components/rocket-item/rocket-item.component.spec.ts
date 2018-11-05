import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketItemComponent } from './rocket-item.component';

describe('RocketItemComponent', () => {
  let component: RocketItemComponent;
  let fixture: ComponentFixture<RocketItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
