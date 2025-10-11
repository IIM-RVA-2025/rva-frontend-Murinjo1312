import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervacijaListComponent } from './rezervacija-list.component';

describe('RezervacijaListComponent', () => {
  let component: RezervacijaListComponent;
  let fixture: ComponentFixture<RezervacijaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RezervacijaListComponent]
    });
    fixture = TestBed.createComponent(RezervacijaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
