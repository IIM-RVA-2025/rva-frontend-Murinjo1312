import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutnikListComponent } from './putnik-list.component';

describe('PutnikListComponent', () => {
  let component: PutnikListComponent;
  let fixture: ComponentFixture<PutnikListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PutnikListComponent]
    });
    fixture = TestBed.createComponent(PutnikListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
