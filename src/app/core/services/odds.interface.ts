// src/app/core/services/odds.interface.ts

export interface OddsEvent {
    homeTeam: string;
    awayTeam: string;
    moneyline: {
        home: number;
        away: number;
    };
    spread: {
        home: number;
        away: number;
    };
    overUnder: {
        home: number;
        away: number;
    };
    dateTime: string;  // Date and time of the event
}

export interface OddsData {
    nflOdds: OddsEvent[];
    nbaOdds: OddsEvent[];
    cfbOdds: OddsEvent[];
}
