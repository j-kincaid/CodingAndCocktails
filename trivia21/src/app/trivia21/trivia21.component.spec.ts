import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trivia21Component } from './trivia21.component';

describe('Trivia21Component', () => {
  let component: Trivia21Component;
  let fixture: ComponentFixture<Trivia21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trivia21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trivia21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
