import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/app-services/ships.service';
import { Ship } from 'src/app/models/ship.model';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {
  ships: Array<Ship>
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
      this.ships = response.results
      this.setShipId()
      this.previous = response.previous
      this.next = response.next
    } catch (error) {
      console.log(error);
    }
  }

  //asigno un id a cada ship para gestionar el visionado de imágenes porque la API no las proporciona.
  setShipId() {
    this.ships.forEach(ship => {
      const urlSplit = ship.url.split('/');
      ship.id = urlSplit[urlSplit.length - 2];
    })
  }

}
