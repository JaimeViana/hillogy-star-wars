import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/app-services/ships.service';
import { Ship } from 'src/app/models/ship.model';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  data: any;
  ships: Ship[];
  initialPageUrl: string;
  page: number;

  constructor(private shipsService: ShipsService) {
    this.page = 1;
    this.initialPageUrl = 'https://swapi.dev/api/starships/?page=' + this.page;
  }

  async ngOnInit(): Promise<void> {
    try {
      this.data = await this.shipsService.getByPage(this.initialPageUrl);
      this.ships = this.data.results
      // console.log(this.data);
    } catch (error) {
      console.log(error);
    }
    //asigno un id a cada ship para gestionar el visionado de imágenes
    this.ships.forEach(ship => {
      const urlSplit = ship.url.split('/');
      ship.id = urlSplit[urlSplit.length - 2];
    })
  }

  // prevPage() {
  //   (this.data.previous !== null) ? this.page-- : "";
  //   console.log(this.initialPageUrl);
  //   console.log('página cuando pulso PREV', this.page);
  // }


  // nextPage() {
  //   (this.data.next != null) ? this.page++ : "";
  //   console.log('página cuando pulso NEXT', this.page);
  // }
}
