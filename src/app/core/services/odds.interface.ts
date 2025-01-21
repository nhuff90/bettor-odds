// src/app/core/services/odds.interface.ts

export interface Odds {
    odds: number;
    sportsbook: string;
}

export interface OddsEvent {
    homeTeam: string;
    awayTeam: string;
    homeTeamOdds: {
        moneyline: Odds;
        spread: Odds;
        overUnder: Odds;
    };
    awayTeamOdds: {
        moneyline: Odds;
        spread: Odds;
        overUnder: Odds;
    };
    dateTime: string;  // Date and time of the event
}

export interface OddsData {
    nflOdds: OddsEvent[];
    nbaOdds: OddsEvent[];
    cfbOdds: OddsEvent[];
}
