import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { weatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component: weatherComponent;
  let fixture: ComponentFixture<weatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ weatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(weatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
