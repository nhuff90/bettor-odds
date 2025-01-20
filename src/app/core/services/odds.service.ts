import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OddsService {
  private apiUrl = 'https://api.sportsdata.io/v3/odds';  // Example API URL for fetching odds data

  constructor(private http: HttpClient) { }

  // Fetch the odds data
  getOdds(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);  // Make a GET request to the API
  }

  // Refresh odds data (could be used for WebSockets or interval updates)
  refreshOdds() {
    this.getOdds().subscribe(data => {
      console.log('Odds refreshed:', data);  // Logic for updating data, or pushing data to frontend via WebSocket
    });
  }
}
