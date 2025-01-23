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
          id: 'nfl1',
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
          id: 'nfl2',
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
          id: 'nba1',
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
        },
        {
          id: 'nba2',
          homeTeam: 'Dallas Mavericks',
          awayTeam: 'San Antonio Spurs',
          dateTime: '2025-01-22T21:00:00',
          homeTeamOdds: {
            moneyline: { odds: -200, sportsbook: 'Bookmaker B' },
            spread: { odds: -6.5, sportsbook: 'Bookmaker A' },
            overUnder: { odds: 218.5, sportsbook: 'Bookmaker C' }
          },
          awayTeamOdds: {
            moneyline: { odds: +180, sportsbook: 'Bookmaker B' },
            spread: { odds: +6.5, sportsbook: 'Bookmaker A' },
            overUnder: { odds: 219.0, sportsbook: 'Bookmaker C' }
          }
        },
        {
          id: 'nba3',
          homeTeam: 'Houston Rockets',
          awayTeam: 'Utah Jazz',
          dateTime: '2025-01-22T22:00:00',
          homeTeamOdds: {
            moneyline: { odds: -180, sportsbook: 'Bookmaker A' },
            spread: { odds: -4.5, sportsbook: 'Bookmaker C' },
            overUnder: { odds: 212.0, sportsbook: 'Bookmaker B' }
          },
          awayTeamOdds: {
            moneyline: { odds: +160, sportsbook: 'Bookmaker A' },
            spread: { odds: +4.5, sportsbook: 'Bookmaker C' },
            overUnder: { odds: 213.5, sportsbook: 'Bookmaker B' }
          }
        },
        {
          id: 'nba4',
          homeTeam: 'Los Angeles Lakers',
          awayTeam: 'Memphis Grizzlies',
          dateTime: '2025-01-23T00:30:00',
          homeTeamOdds: {
            moneyline: { odds: -110, sportsbook: 'Bookmaker B' },
            spread: { odds: -1.5, sportsbook: 'Bookmaker A' },
            overUnder: { odds: 215.0, sportsbook: 'Bookmaker C' }
          },
          awayTeamOdds: {
            moneyline: { odds: -105, sportsbook: 'Bookmaker B' },
            spread: { odds: +1.5, sportsbook: 'Bookmaker A' },
            overUnder: { odds: 216.5, sportsbook: 'Bookmaker C' }
          }
        },
        {
          id: 'nba5',
          homeTeam: 'Phoenix Suns',
          awayTeam: 'Denver Nuggets',
          dateTime: '2025-01-23T02:00:00',
          homeTeamOdds: {
            moneyline: { odds: -220, sportsbook: 'Bookmaker C' },
            spread: { odds: -6, sportsbook: 'Bookmaker B' },
            overUnder: { odds: 228.0, sportsbook: 'Bookmaker A' }
          },
          awayTeamOdds: {
            moneyline: { odds: +190, sportsbook: 'Bookmaker C' },
            spread: { odds: +6, sportsbook: 'Bookmaker B' },
            overUnder: { odds: 229.5, sportsbook: 'Bookmaker A' }
          }
        }
      ],
      cfbOdds: [
        {
          id: 'cfb1',
          homeTeam: 'Ohio State Buckeyes',
          awayTeam: 'Michigan Wolverines',
          dateTime: '2025-01-23T15:00:00',
          homeTeamOdds: {
            moneyline: { odds: -140, sportsbook: 'Bookmaker A' },
            spread: { odds: -3.5, sportsbook: 'Bookmaker C' },
            overUnder: { odds: 210.0, sportsbook: 'Bookmaker B' }
          },
          awayTeamOdds: {
            moneyline: { odds: +120, sportsbook: 'Bookmaker A' },
            spread: { odds: +3.5, sportsbook: 'Bookmaker C' },
            overUnder: { odds: 211.5, sportsbook: 'Bookmaker B' }
          }
        },
        {
          id: 'cfb2',
          homeTeam: 'Alabama Crimson Tide',
          awayTeam: 'LSU Tigers',
          dateTime: '2025-01-23T20:30:00',
          homeTeamOdds: {
            moneyline: { odds: -160, sportsbook: 'Bookmaker B' },
            spread: { odds: -4.5, sportsbook: 'Bookmaker C' },
            overUnder: { odds: 220.5, sportsbook: 'Bookmaker A' }
          },
          awayTeamOdds: {
            moneyline: { odds: +140, sportsbook: 'Bookmaker B' },
            spread: { odds: +4.5, sportsbook: 'Bookmaker C' },
            overUnder: { odds: 222.0, sportsbook: 'Bookmaker A' }
          }
        }
      ]
    };
  }
}
