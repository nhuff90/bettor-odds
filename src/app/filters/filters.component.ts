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
    this.filterSelected.emit(filter);
  }
}
