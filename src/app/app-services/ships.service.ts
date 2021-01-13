import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ship } from '../models/ship.model';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  baseUrl: string;
  currentId: number;

  constructor(private HttpClient: HttpClient) {
    this.baseUrl = 'https://swapi.dev/api'
    // paginación 'https://swapi.dev/api/starships?page=1'
    this.currentId = 75;
  }

  getByPage(url): Promise<any> {
    return this.HttpClient.get<any>(url).toPromise()
  }

  getById(shipId): Promise<any> {
    return this.HttpClient.get<Ship>(`${this.baseUrl}/starships/${shipId}`).toPromise()
  }

  addShip(ship): Promise<any> {
    return new Promise((resolve, reject) => {
      const shipsList = JSON.parse(localStorage.getItem('ships-list'));
      ship.id = this.currentId;
      shipsList.push(ship);
      this.currentId++;
      localStorage.setItem('ships-list', JSON.stringify(shipsList));
      resolve('new starship added successfully')
    })
  }
}

