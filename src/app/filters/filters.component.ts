import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  @Input() filters: string[] = [];
  @Output() filterSelected = new EventEmitter<string>();

  selectFilter(filter: string) {
    // Map filter names to table IDs
    const filterToTableIdMap: { [key: string]: string } = {
      'Main Markets': 'moneyline',
      'Moneyline': 'moneyline',
      'Point Spread': 'point-spread',
      'Over/Under': 'over-under',
    };
    const tableId = filterToTableIdMap[filter] || 'moneyline'; // Default to 'moneyline'
    this.filterSelected.emit(tableId);
  }
}
