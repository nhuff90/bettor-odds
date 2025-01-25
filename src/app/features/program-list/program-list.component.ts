import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent implements OnInit {
  programs = [
    { name: 'Program 1', startDate: '2025-01-01', endDate: '2025-12-31' },
    { name: 'Program 2', startDate: '2025-02-01', endDate: '2025-11-30' },
    { name: 'Program 3', startDate: '2025-03-01', endDate: '2025-09-30' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
