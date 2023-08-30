import { Component, OnInit } from '@angular/core';
import { NbaScraperService } from '../nba-scraper.service';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {
  playerName: string = '';
  playerData: any[] = [];

  constructor(private nbaScraperService: NbaScraperService) { }

  ngOnInit() { }

  searchPlayerStats() {
    this.playerData = [];

    if (this.playerName) {
      this.nbaScraperService.getPlayerStats(this.playerName)
        .subscribe((response: any) => {
          const playerStats = response.stats;

          for (const season of playerStats) {
            const year = season.year;
            const average = season.average;

            this.playerData.push({ year, average });
          }
        });
    }
  }
}
