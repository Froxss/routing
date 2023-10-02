import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableshomeComponent } from './tableshome.component';

describe('TableshomeComponent', () => {
  let component: TableshomeComponent;
  let fixture: ComponentFixture<TableshomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableshomeComponent]
    });
    fixture = TestBed.createComponent(TableshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
