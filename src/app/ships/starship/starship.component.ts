import { Component, OnInit } from '@angular/core';
import { Ship } from '../../models/ship.model';
import { ShipsService } from '../../app-services/ships.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  ship: Ship;
  imgId: Params;

  constructor(
    private shipsService: ShipsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      try {
        this.ship = new Ship(await this.shipsService.getById(params.shipId));
        console.log(this.ship)
      } catch (error) {
        console.log(error);
      }
    });
  }

}
