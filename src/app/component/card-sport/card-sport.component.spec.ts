import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSportComponent } from './card-sport.component';

describe('CardSportComponent', () => {
  let component: CardSportComponent;
  let fixture: ComponentFixture<CardSportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
