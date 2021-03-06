import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDocComponent } from './grid-doc.component';

describe('GridDocComponent', () => {
  let component: GridDocComponent;
  let fixture: ComponentFixture<GridDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
