import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockOddsService } from '../core/services/mock-odds.service'; // Adjust import
import { OddsData } from '../core/services/odds.interface'; // Adjust import

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: any;

  constructor(
    private route: ActivatedRoute,
    private oddsService: MockOddsService
  ) { }

  ngOnInit(): void {
    // Get the event ID from the route
    const eventId = this.route.snapshot.paramMap.get('id');
    this.loadEventDetails(eventId);
  }

  loadEventDetails(eventId: string | null): void {
    if (eventId) {
      // Replace with a real service call to fetch event details
      const allEvents = [
        ...this.oddsService.getOddsData().nflOdds,
        ...this.oddsService.getOddsData().nbaOdds,
        ...this.oddsService.getOddsData().cfbOdds,
      ];
      this.event = allEvents.find(e => e.id === eventId);
    }
  }
}
