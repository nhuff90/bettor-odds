// mock-odds.service.ts
import { Injectable } from '@angular/core';
import { OddsData } from './odds.interface'; // Adjust import to your interface location

@Injectable({
  providedIn: 'root',
})
export class MockOddsService {
  constructor() { }

  getOddsData(): OddsData {
    return {
      nflOdds: [
        {
          homeTeam: 'Boston Celtics',
          awayTeam: 'Golden State Warriors',
          dateTime: '2025-01-20T17:00:00',
          homeTeamOdds: {
            moneyline: { odds: -375, sportsbook: 'Bookmaker A' },
            spread: { odds: -9, sportsbook: 'Bookmaker B' },
            overUnder: { odds: 223.5, sportsbook: 'Bookmaker C' }
          },
          awayTeamOdds: {
            moneyline: { odds: +396, sportsbook: 'Bookmaker A' },
            spread: { odds: +9.5, sportsbook: 'Bookmaker B' },
            overUnder: { odds: 225, sportsbook: 'Bookmaker C' }
          }
        },
        {
          homeTeam: 'Chicago Bulls',
          awayTeam: 'Los Angeles Clippers',
          dateTime: '2025-01-20T22:30:00',
          homeTeamOdds: {
            moneyline: { odds: +217, sportsbook: 'Bookmaker A' },
            spread: { odds: +6.5, sportsbook: 'Bookmaker B' },
            overUnder: { odds: 226.5, sportsbook: 'Bookmaker C' }
          },
          awayTeamOdds: {
            moneyline: { odds: -217, sportsbook: 'Bookmaker A' },
            spread: { odds: -6, sportsbook: 'Bookmaker B' },
            overUnder: { odds: 227.5, sportsbook: 'Bookmaker C' }
          }
        }
      ],
      nbaOdds: [
        {
          homeTeam: 'Portland Trail Blazers',
          awayTeam: 'Miami Heat',
          dateTime: '2025-01-21T19:30:00',
          homeTeamOdds: {
            moneyline: { odds: -150, sportsbook: 'Bookmaker A' },
            spread: { odds: -5, sportsbook: 'Bookmaker B' },
            overUnder: { odds: 220.5, sportsbook: 'Bookmaker C' }
          },
          awayTeamOdds: {
            moneyline: { odds: +120, sportsbook: 'Bookmaker A' },
            spread: { odds: +5, sportsbook: 'Bookmaker B' },
            overUnder: { odds: 221.5, sportsbook: 'Bookmaker C' }
          }
        }
      ],
      cfbOdds: [
        {
          homeTeam: 'New York Knicks',
          awayTeam: 'Brooklyn Nets',
          dateTime: '2025-01-21T19:30:00',
          homeTeamOdds: {
            moneyline: { odds: -500, sportsbook: 'Bookmaker C' },
            spread: { odds: -10.5, sportsbook: 'Bookmaker A' },
            overUnder: { odds: 222.5, sportsbook: 'Bookmaker B' }
          },
          awayTeamOdds: {
            moneyline: { odds: +375, sportsbook: 'Bookmaker C' },
            spread: { odds: +10.5, sportsbook: 'Bookmaker A' },
            overUnder: { odds: 223.5, sportsbook: 'Bookmaker B' }
          }
        }
      ]
    };
  }
}
