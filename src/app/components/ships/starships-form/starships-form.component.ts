import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShipsService } from 'src/app/app-services/ships.service';
import Swal from 'sweetalert2';


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
    private shipsService: ShipsService
  ) {
    this.form = new FormGroup({
      photoUrl: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      model: new FormControl('', [Validators.required]),
      starship_class: new FormControl('', [Validators.required]),
      cargo_capacity: new FormControl(''),
      length: new FormControl(''),
      max_atmosphering_speed: new FormControl('', [Validators.required]),
      crew: new FormControl('', [Validators.required]),
      passengers: new FormControl(''),
    })
    this.update = false;
  }

  async onSubmit() {
    this.newShip = this.form.value;
    const msg = await this.shipsService.addShip(this.newShip);
  }

  showModal() {
    Swal.fire(
      "Good job!",
      "You've created a new starship!",
      "success"
    )
  }

}
