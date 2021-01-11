import { Component, OnInit } from '@angular/core';
import { Ship } from '../../models/ship.model';
import { ShipsService } from '../../app-services/ships.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  ship: Ship;

  constructor(
    private shipsService: ShipsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      try {
        this.ship = await this.shipsService.getById(params.shipId);
      } catch (error) {
        console.log(error);
      }
    });
  }

}
