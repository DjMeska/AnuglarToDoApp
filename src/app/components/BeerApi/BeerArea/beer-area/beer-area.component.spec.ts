import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerAreaComponent } from './beer-area.component';

describe('BeerAreaComponent', () => {
  let component: BeerAreaComponent;
  let fixture: ComponentFixture<BeerAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
