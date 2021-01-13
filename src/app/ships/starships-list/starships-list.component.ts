import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/app-services/ships.service';
import { Ship, ShipInfo } from 'src/app/models/ship.model';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {
  shipsList: Array<Ship>
  initialPageUrl: string;
  previous?: string;
  next?: string;
  currentId: number;

  constructor(private shipsService: ShipsService) {
    this.initialPageUrl = 'https://swapi.dev/api/starships/?page=1';
  }

  async ngOnInit() {
    this.getPage(this.initialPageUrl)
  }

  prevPage() {
    (this.previous !== null) ? this.getPage(this.previous) : null;
  }

  nextPage() {
    (this.next !== null) ? this.getPage(this.next) : null;
  }

  async getPage(targetUrl) {
    try {
      const response = await this.shipsService.getByPage(targetUrl);
      this.shipsList = response.results.map((shipInfo: ShipInfo) => new Ship(shipInfo))
      this.previous = response.previous
      this.next = response.next
    } catch (error) {
      console.log(error);
    }
  }
}
