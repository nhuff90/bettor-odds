import { Injectable } from '@angular/core';
import { ArbitrageBet } from '../../features/arbitrage/arbitrage-bet.model';

@Injectable({
  providedIn: 'root',
})
export class ArbitrageService {
  getMockArbitrageBets(): ArbitrageBet[] {
    return [
      {
        arbPercentage: 1.23,
        event: "Manchester United vs Arsenal",
        market: "Moneyline",
        books: [
          { name: "Fanduel", odds: "+150", betSize: null, buttonLabel: "Bet" },
          { name: "DraftKings", odds: "-120", betSize: null, buttonLabel: "Bet" }
        ]
      },
      {
        arbPercentage: 2.05,
        event: "New York Yankees vs Boston Red Sox",
        market: "Over/Under",
        books: [
          { name: "Bet365", odds: "-110", betSize: null, buttonLabel: "Bet" },
          { name: "Caesars", odds: "+120", betSize: null, buttonLabel: "Bet" }
        ]
      },
      {
        arbPercentage: 1.87,
        event: "Los Angeles Lakers vs Golden State Warriors",
        market: "Point Spread",
        books: [
          { name: "FanDuel", odds: "+2.5 (-110)", betSize: null, buttonLabel: "Bet" },
          { name: "DraftKings", odds: "-2.5 (-105)", betSize: null, buttonLabel: "Bet" }
        ]
      },
      {
        arbPercentage: 1.45,
        event: "Kansas City Chiefs vs Philadelphia Eagles",
        market: "Total Points",
        books: [
          { name: "BetMGM", odds: "Over 2.5 (+125)", betSize: null, buttonLabel: "Bet" },
          { name: "Caesars", odds: "Under 2.5 (-135)", betSize: null, buttonLabel: "Bet" }
        ]
      },
      {
        arbPercentage: 1.72,
        event: "Barcelona vs Real Madrid",
        market: "Moneyline",
        books: [
          { name: "FanDuel", odds: "+200", betSize: null, buttonLabel: "Bet" },
          { name: "Bet365", odds: "-150", betSize: null, buttonLabel: "Bet" }
        ]
      },
      {
        arbPercentage: 2.34,
        event: "Houston Astros vs Atlanta Braves",
        market: "Over/Under",
        books: [
          { name: "DraftKings", odds: "Over 1.5 (-110)", betSize: null, buttonLabel: "Bet" },
          { name: "BetMGM", odds: "Under 1.5 (+105)", betSize: null, buttonLabel: "Bet" }
        ]
      }
    ];
  }
}
