import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ShipsService } from 'src/app/app-services/ships.service';

@Component({
  selector: 'app-starships-form',
  templateUrl: './starships-form.component.html',
  styleUrls: ['./starships-form.component.css']
})
export class StarshipsFormComponent implements OnInit {

  form: FormGroup;
  update: boolean;

  constructor(
    private shipsService: ShipsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = new FormGroup({
      photoUrl: new FormControl(''),
      name: new FormControl(''),
      model: new FormControl(''),
      starship_class: new FormControl(''),
      cargo_capacity: new FormControl(''),
      length: new FormControl(''),
      max_atmosphering_speed: new FormControl(''),
      crew: new FormControl(''),
      passengers: new FormControl(''),
    })
    this.update = false;
  }

  async ngOnInit() {
    const params = this.activatedRoute.snapshot.params
    if (params.shipId) {
      const ship = await this.shipsService.getById(params.shipId);
      this.form = new FormGroup({
        photoUrl: new FormControl(`https://starwars-visualguide.com/assets/img/starships/${params.shipId}.jpg`),
        name: new FormControl(`${ship.name}`),
        model: new FormControl(`${ship.model}`),
        starship_class: new FormControl(`${ship.starship_class}`),
        cargo_capacity: new FormControl(`${ship.cargo_capacity}`),
        length: new FormControl(`${ship.length}`),
        max_atmosphering_speed: new FormControl(`${ship.max_atmosphering_speed}`),
        crew: new FormControl(`${ship.crew}`),
        passengers: new FormControl(`${ship.passengers}`),
      });
      this.update = true;
    }
  }

  updateArtist() { }

  onSubmit() { }

}
