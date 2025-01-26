import { Component, OnInit } from '@angular/core';
import { MockOddsService } from '../services/mock-odds.service'; // Adjust import
import { OddsData } from '../odds.interface'; // Adjust import

@Component({
  selector: 'app-odds',
  templateUrl: './odds.component.html',
  styleUrls: ['./odds.component.css']
})
export class OddsComponent implements OnInit {
  oddsData: OddsData = { nflOdds: [], nbaOdds: [], cfbOdds: [] }; // Initialized with empty arrays

  constructor(private mockOddsService: MockOddsService) { }

  ngOnInit(): void {
    this.fetchOddsData();
  }

  fetchOddsData() {
    this.oddsData = this.mockOddsService.getOddsData(); // Fetch the data from the mock service
  }
}
