export interface ShipInfo {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: number;
    length: number;
    max_atmosphering_speed: number;
    crew: string;
    passengers: number;
    cargo_capacity: number;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: number;
    starship_class: string;
    pilots: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
    id: string;
}

export class Ship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: number;
    length: number;
    max_atmosphering_speed: number;
    crew: string;
    passengers: number;
    cargo_capacity: number;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: number;
    starship_class: string;
    pilots: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
    id: string;

    constructor(info: ShipInfo) {
        this.name = info.name;
        this.model = info.model;
        this.manufacturer = info.manufacturer;
        this.cost_in_credits = info.cost_in_credits;
        this.length = info.length;
        this.max_atmosphering_speed = info.max_atmosphering_speed;
        this.crew = info.crew;
        this.passengers = info.passengers;
        this.cargo_capacity = info.cargo_capacity;
        this.consumables = info.consumables;
        this.hyperdrive_rating = info.hyperdrive_rating;
        this.MGLT = info.MGLT;
        this.starship_class = info.starship_class;
        this.pilots = info.pilots;
        this.films = info.films;
        this.created = info.created;
        this.edited = info.edited;
        this.url = info.url;
        this.setShipId()
    }

    //asigno un id a cada ship para gestionar el visionado de imágenes porque la API no las proporciona.
    setShipId() {
        const urlSplit = this.url.split('/');
        this.id = urlSplit[urlSplit.length - 2];
    }

}