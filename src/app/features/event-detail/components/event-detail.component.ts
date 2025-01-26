import { Component } from '@angular/core';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent {
  filters = ['Main Markets', 'Moneyline', 'Point Spread', 'Over/Under'];

  oddsMarkets = [
    {
      id: 'moneyline', // Add unique ID
      title: 'Commanders vs Eagles Moneyline',
      teams: [
        { name: 'Washington Commanders', bestOdds: '+255', avgOdds: '+240', odds: ['+255', '+250', '+240'] },
        { name: 'Philadelphia Eagles', bestOdds: '-258', avgOdds: '-285', odds: ['-258', '-270', '-285'] },
      ],
    },
    {
      id: 'point-spread', // Add unique ID
      title: 'Commanders vs Eagles Point Spread',
      teams: [
        { name: 'Philadelphia Eagles', bestOdds: '-6.5 (+109)', avgOdds: '-6.5 (+104)', odds: ['+109', '+105', '+102'] },
        { name: 'Washington Commanders', bestOdds: '+6.5 (-114)', avgOdds: '+6.5 (-117)', odds: ['-114', '-110', '-108'] },
      ],
    },
    {
      id: 'over-under', // Add unique ID
      title: 'Commanders vs Eagles Over/Under',
      teams: [
        { name: 'Over 48.5', bestOdds: '-110', avgOdds: '-115', odds: ['-110', '-112', '-113'] },
        { name: 'Under 48.5', bestOdds: '+105', avgOdds: '+102', odds: ['+105', '+103', '+100'] },
      ],
    },
  ];

  sportsbooks = [
    { name: 'FanDuel', logo: 'assets/fanduel-logo.png' },
    { name: 'Bet365', logo: 'assets/bet365-logo.png' },
    { name: 'DraftKings', logo: 'assets/draftkings-logo.png' },
  ];

  scrollToTable(tableId: string): void {
    const tableElement = document.getElementById(tableId);
    if (tableElement) {
      tableElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
