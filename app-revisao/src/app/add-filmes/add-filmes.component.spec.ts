import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilmesComponent } from './add-filmes.component';

describe('AddFilmesComponent', () => {
  let component: AddFilmesComponent;
  let fixture: ComponentFixture<AddFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFilmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
