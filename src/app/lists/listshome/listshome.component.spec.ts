import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListshomeComponent } from './listshome.component';

describe('ListshomeComponent', () => {
  let component: ListshomeComponent;
  let fixture: ComponentFixture<ListshomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListshomeComponent]
    });
    fixture = TestBed.createComponent(ListshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
