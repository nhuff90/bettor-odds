import { Component, OnInit, OnDestroy } from '@angular/core';
import { MockOddsService } from '../core/services/mock-odds.service'; // Use the mock service
import { Subscription } from 'rxjs';
import { OddsEvent } from '../core/services/odds.interface'; // Import the OddsEvent interface

@Component({
  selector: 'app-odds',
  templateUrl: './odds.component.html',
  styleUrls: ['./odds.component.css']
})
export class OddsComponent implements OnInit, OnDestroy {
  nflOddsData: OddsEvent[] = [];  // Array to store NFL odds data
  nbaOddsData: OddsEvent[] = [];  // Array to store NBA odds data
  cfbOddsData: OddsEvent[] = [];  // Array to store CFB odds data
  oddsSubscription: Subscription | null = null;  // Initialize with null
  errorMessage: string = '';  // Initialize error message as an empty string

  constructor(private oddsService: MockOddsService) { }

  ngOnInit() {
    // Fetch initial odds data for NFL, NBA, and CFB
    this.oddsSubscription = this.oddsService.getOdds().subscribe(
      (data) => {
        this.nflOddsData = data.nflOdds;
        this.nbaOddsData = data.nbaOdds;
        this.cfbOddsData = data.cfbOdds;
      },
      error => {
        this.errorMessage = 'Error fetching odds data.';
      }
    );
  }

  ngOnDestroy() {
    if (this.oddsSubscription) {
      this.oddsSubscription.unsubscribe();  // Clean up subscription to avoid memory leaks
    }
  }

  refreshOdds() {
    this.oddsService.refreshOdds();
  }
}
