import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OddsData } from './odds.interface'; // Import the OddsData interface

@Injectable({
  providedIn: 'root'
})
export class MockOddsService {

  getOdds() {
    const mockData = {
      nflOdds: [
        {
          homeTeam: 'Boston Celtics',
          awayTeam: 'Golden State Warriors',
          moneyline: { home: -375, away: +396 },
          spread: { home: -9, away: +9.5 },
          overUnder: { home: 223.5, away: 225 },
          dateTime: '2025-01-20T17:00:00'
        },
        {
          homeTeam: 'Chicago Bulls',
          awayTeam: 'Los Angeles Clippers',
          moneyline: { home: +217, away: -217 },
          spread: { home: +6.5, away: -6 },
          overUnder: { home: 226.5, away: 227.5 },
          dateTime: '2025-01-20T22:30:00'
        }
      ],
      nbaOdds: [
        {
          homeTeam: 'Portland Trail Blazers',
          awayTeam: 'Miami Heat',
          moneyline: { home: -150, away: +120 },
          spread: { home: -5, away: +5 },
          overUnder: { home: 220.5, away: 221.5 },
          dateTime: '2025-01-21T19:30:00'
        }
      ],
      cfbOdds: [
        {
          homeTeam: 'New York Knicks',
          awayTeam: 'Brooklyn Nets',
          moneyline: { home: -500, away: +375 },
          spread: { home: -10.5, away: +10.5 },
          overUnder: { home: 222.5, away: 223.5 },
          dateTime: '2025-01-21T19:30:00'
        }
      ]
    };
    return of(mockData);  // Return the mock data as an observable
  }

  refreshOdds() {
    console.log('Refreshing odds...');
  }
}
