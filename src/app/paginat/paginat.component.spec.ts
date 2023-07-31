import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatComponent } from './paginat.component';

describe('PaginatComponent', () => {
  let component: PaginatComponent;
  let fixture: ComponentFixture<PaginatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatComponent]
    });
    fixture = TestBed.createComponent(PaginatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
