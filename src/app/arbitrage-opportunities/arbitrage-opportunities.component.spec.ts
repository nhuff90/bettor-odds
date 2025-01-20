import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitrageOpportunitiesComponent } from './arbitrage-opportunities.component';

describe('ArbitrageOpportunitiesComponent', () => {
  let component: ArbitrageOpportunitiesComponent;
  let fixture: ComponentFixture<ArbitrageOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbitrageOpportunitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbitrageOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
