import { Component, Input, OnInit } from '@angular/core';
import { OddsEvent } from '../../odds/odds.interface';  // Import OddsEvent for type-checking

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() event!: OddsEvent; // Use '!' to tell TypeScript that this will be assigned later

  constructor() { }

  ngOnInit(): void {
    // Any additional setup can go here, though it's not needed to fetch data for this component
  }
}
