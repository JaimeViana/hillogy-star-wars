import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ShipsService } from 'src/app/app-services/ships.service';

@Component({
  selector: 'app-starships-form',
  templateUrl: './starships-form.component.html',
  styleUrls: ['./starships-form.component.css']
})
export class StarshipsFormComponent {

  form: FormGroup;
  update: boolean;
  newShip: any;

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

  async onSubmit() {
    this.newShip = this.form.value;
    console.log(this.newShip);
    const msg = await this.shipsService.addShip(this.newShip);
    console.log(msg);

  }

}
