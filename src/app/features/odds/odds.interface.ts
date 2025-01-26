// src/app/core/services/odds.interface.ts

export interface Odds {
    odds: number;
    sportsbook: string;
}

export interface OddsEvent {
    id: string; // Add this field
    homeTeam: string;
    awayTeam: string;
    dateTime: string;
    homeTeamOdds: {
        moneyline: { odds: number; sportsbook: string };
        spread: { odds: number; sportsbook: string };
        overUnder: { odds: number; sportsbook: string };
    };
    awayTeamOdds: {
        moneyline: { odds: number; sportsbook: string };
        spread: { odds: number; sportsbook: string };
        overUnder: { odds: number; sportsbook: string };
    };
}

export interface OddsData {
    nflOdds: OddsEvent[];
    nbaOdds: OddsEvent[];
    cfbOdds: OddsEvent[];
}
