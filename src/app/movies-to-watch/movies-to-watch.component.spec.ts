import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesTowatchComponent } from './movies-to-watch.component';

describe('MoviesTowatchComponent', () => {
  let component: MoviesTowatchComponent;
  let fixture: ComponentFixture<MoviesTowatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesTowatchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesTowatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
