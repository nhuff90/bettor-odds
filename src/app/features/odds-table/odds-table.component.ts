import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odds-table',
  templateUrl: './odds-table.component.html',
  styleUrls: ['./odds-table.component.css'],
})
export class OddsTableComponent {
  @Input() market!: { id: string; title: string; teams: any[] }; // Add `id` here
  @Input() sportsbooks!: { name: string; logo: string }[];
}
