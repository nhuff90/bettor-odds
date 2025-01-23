import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-header',
  templateUrl: './event-header.component.html',
  styleUrls: ['./event-header.component.css'],
})
export class EventHeaderComponent {
  @Input() eventTitle!: string;
  @Input() eventDate!: string;
  @Input() league!: string;
}
