import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arbitrage-opportunities',
  templateUrl: './arbitrage-opportunities.component.html',
  styleUrls: ['./arbitrage-opportunities.component.css']
})
export class ArbitrageOpportunitiesComponent implements OnInit {
  arbitrageOpportunities = [
    { profit: 50, sportsbooks: ['Sportsbook A', 'Sportsbook B'], timestamp: '2025-01-20' },
    { profit: 30, sportsbooks: ['Sportsbook C', 'Sportsbook D'], timestamp: '2025-01-21' },
    { profit: 75, sportsbooks: ['Sportsbook A', 'Sportsbook D'], timestamp: '2025-01-22' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
