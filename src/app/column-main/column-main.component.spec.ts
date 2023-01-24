import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnMainComponent } from './column-main.component';

describe('ColumnMainComponent', () => {
  let component: ColumnMainComponent;
  let fixture: ComponentFixture<ColumnMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
