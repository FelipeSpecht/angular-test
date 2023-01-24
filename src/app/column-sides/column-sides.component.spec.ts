import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnSidesComponent } from './column-sides.component';

describe('ColumnSidesComponent', () => {
  let component: ColumnSidesComponent;
  let fixture: ComponentFixture<ColumnSidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnSidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnSidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
