import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AranzmanListComponent } from './aranzman-list.component';

describe('AranzmanListComponent', () => {
  let component: AranzmanListComponent;
  let fixture: ComponentFixture<AranzmanListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AranzmanListComponent]
    });
    fixture = TestBed.createComponent(AranzmanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
