export interface ArbitrageBook {
    name: string;
    odds: string;
    betSize: number | null;
    buttonLabel: string;
}

export interface ArbitrageBet {
    arbPercentage: number;
    event: string;
    market: string;
    books: ArbitrageBook[];
    profitTeam1?: string; // Optional because it will be dynamically calculated
    profitTeam2?: string; // Optional because it will be dynamically calculated
}
