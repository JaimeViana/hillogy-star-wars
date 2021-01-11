import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ship } from '../models/ship.model';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  baseUrl: string;

  constructor(private HttpClient: HttpClient) {
    this.baseUrl = 'https://swapi.dev/api'
  }

  getAll(): Promise<Ship[]> {
    return this.HttpClient.get<Ship[]>(`${this.baseUrl}/starships`).toPromise()
  }

  getById(shipId): Promise<Ship> {
    return this.HttpClient.get<Ship>(`${this.baseUrl}/starships/${shipId}`).toPromise()
  }

  // create(formValue): Promise<Ship> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   }
  //   return this.HttpClient.post<Ship>(`${this.baseUrl}/create`, formValue, httpOptions).toPromise()
  // }

  // update(shipId, body): Promise<Ship> {
  //   return this.HttpClient.put<Ship>(`${this.baseUrl}/starships/${shipId}`, body).toPromise()
  // }

  // remove(shipId): Promise<Ship> {
  //   return this.HttpClient.delete<Ship>(`${this.baseUrl}/starships/${shipId}`).toPromise()
  // }
}

