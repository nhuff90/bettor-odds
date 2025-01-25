import { Component, OnInit } from '@angular/core';
import { ArbitrageBet } from './arbitrage-bet.model';
import { ArbitrageService } from '../core/services/arbitrage.service';

@Component({
  selector: 'app-arbitrage',
  templateUrl: './arbitrage.component.html',
  styleUrls: ['./arbitrage.component.css'],
})
export class ArbitrageComponent implements OnInit {
  arbitrageBets: ArbitrageBet[] = [];

  constructor(private arbitrageService: ArbitrageService) { }

  ngOnInit(): void {
    this.arbitrageBets = this.arbitrageService.getMockArbitrageBets();
  }

  calculateProfits(bet: ArbitrageBet, changedIndex: number): void {
    if (bet.books.length < 2) return;

    const oddsToDecimal = (odds: string): number => {
      if (odds.startsWith('+')) {
        return 1 + parseFloat(odds.substring(1)) / 100;
      } else if (odds.startsWith('-')) {
        return 1 + 100 / Math.abs(parseFloat(odds.substring(1)));
      }
      return 1;
    };

    const odds1 = oddsToDecimal(bet.books[0].odds);
    const odds2 = oddsToDecimal(bet.books[1].odds);

    // If the first bet size is updated, calculate the second bet size
    if (changedIndex === 0) {
      const betSize1 = bet.books[0].betSize || 0;
      bet.books[1].betSize = parseFloat((betSize1 * odds1 / odds2).toFixed(2));
    } else if (changedIndex === 1) {
      const betSize2 = bet.books[1].betSize || 0;
      bet.books[0].betSize = parseFloat((betSize2 * odds2 / odds1).toFixed(2));
    }

    // Calculate profits for both outcomes
    const betSize1 = bet.books[0].betSize || 0;
    const betSize2 = bet.books[1].betSize || 0;

    bet.profitTeam1 = `$${(betSize1 * odds1 - betSize2).toFixed(2)}`;
    bet.profitTeam2 = `$${(betSize2 * odds2 - betSize1).toFixed(2)}`;
  }
}
