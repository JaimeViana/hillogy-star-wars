export interface ShipInfo {
    name: string;
    model: string;
    manufacturer?: string;
    cost_in_credits?: number;
    length: number;
    max_atmosphering_speed: number;
    crew?: string;
    passengers: number;
    cargo_capacity: number;
    consumables?: string;
    hyperdrive_rating?: string;
    MGLT?: number;
    starship_class: string;
    pilots?: string[];
    films?: string[];
    created: string;
    edited?: string;
    url: string;
    id?: string;
}

export class Ship {
    id: string;
    name: string;
    model: string;
    length: number;
    max_atmosphering_speed: number;
    crew: string;
    passengers: number;
    cargo_capacity: number;
    starship_class: string;
    created: string;
    url: string;

    photoUrl: string;

    constructor(info: ShipInfo) {
        this.name = info.name;
        this.model = info.model;
        this.length = info.length;
        this.max_atmosphering_speed = info.max_atmosphering_speed;
        this.crew = info.crew;
        this.passengers = info.passengers;
        this.cargo_capacity = info.cargo_capacity;
        this.starship_class = info.starship_class;
        this.created = info.created;
        this.url = info.url;
        this.setExtras()
    }

    toObject() {
        return {
            id: this.id,
            name: this.name,
            model: this.model,
            length: this.length,
            max_atmosphering_speed: this.max_atmosphering_speed,
            crew: this.crew,
            passengers: this.passengers,
            cargo_capacity: this.cargo_capacity,
            starship_class: this.starship_class,
            created: this.created,
            url: this.url,
            photoUrl: this.photoUrl
        }
    }

    setExtras() {
        const urlSplit = this.url.split('/');
        this.id = urlSplit[urlSplit.length - 2];
        this.photoUrl = `https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`
    }

}