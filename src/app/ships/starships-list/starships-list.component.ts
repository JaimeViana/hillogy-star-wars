import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  ships: any[]

  constructor() {
    this.ships = [
      {
        objectId: 'utk70kfdBh',
        name: 'Rebel transport',
        model: 'GR-75 medium transport',
        url: 'https://4.bp.blogspot.com/-aDB79v_b9w4/V7C8wfnNE7I/AAAAAAAAKyc/IKA6VrxOlfYq0ns2KVhTWBu_60_ihb6bACLcB/s1600/Rebel_transport_box_art.jpg'
      },
      {
        objectId: '7bbrEEnPp3',
        name: 'Republic Assault ship',
        model: 'Acclamator I-class assault ship',
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ab940dbf-6b1c-43d5-9e49-aa8736340b2d/ddgs2hu-62fe01ba-6270-4c44-b10e-808538e3c653.jpg/v1/fill/w_1280,h_690,q_75,strp/star_wars_acclamator_class_assault_ship_by_adamkop_ddgs2hu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02OTAiLCJwYXRoIjoiXC9mXC9hYjk0MGRiZi02YjFjLTQzZDUtOWU0OS1hYTg3MzYzNDBiMmRcL2RkZ3MyaHUtNjJmZTAxYmEtNjI3MC00YzQ0LWIxMGUtODA4NTM4ZTNjNjUzLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.aHmuo1ARluVW1mdQKrEl7lm9mWTV2KRAvou4KJaHots'
      },
      {
        objectId: '9lTVqvWu97',
        name: 'Republic Cruiser',
        model: 'Consular-class cruiser',
        url: ''
      },
      {
        objectId: '78QvzwEkoC',
        name: 'Republic attack cruiser',
        model: 'Senator-class Star Destroyer',
        url: 'https://static.wikia.nocookie.net/starwars/images/c/c8/Imperialattackcruisers.png/revision/latest?cb=20140317112248'
      },
      {
        objectId: 'nY2fTXX1F1',
        name: 'Scimitar',
        model: 'Star Courier',
        url: 'https://pm1.narvii.com/6561/fd87a7e3cef172a91b78bad70d6864f4bb317b3d_00.jpg'
      },
      {
        objectId: 'deSSraPLXL',
        name: 'Sentinel-class landing craft',
        model: 'Sentinel-class landing craft',
        url: 'https://cdna.artstation.com/p/marketplace/presentation_assets/000/357/384/large/file.jpg?1588071904'
      },
    ]
  }


  ngOnInit(): void {
  }

}
