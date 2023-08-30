import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NbaScraperService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPlayerStats(playerName: string) {
    const searchUrl = `${this.baseUrl}/api/search/player?q=${playerName}`;
    return this.http.get(searchUrl);
  }

}

