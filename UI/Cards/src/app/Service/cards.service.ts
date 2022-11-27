import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cards } from '../Models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  baseUrl = 'https://localhost:7071/api/Cards';

  constructor(private http: HttpClient) { }


  // Get all cards
  getAllCards(): Observable<Cards[]> {
    console.log('Hello');
    return this.http.get<Cards[]> (this.baseUrl);
  }

  // return the card values
  addCard(card: Cards): Observable<Cards> {
    card.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Cards> (this.baseUrl, card);
  }

  // delete a card
  deleteACard(id: string): Observable<Cards> {
    return this.http.delete<Cards> (this.baseUrl + '/' + id);
  }

  // update a card
  updateCard(card: Cards): Observable<Cards> {
    return this.http.put<Cards> (this.baseUrl + '/' + card.id, card);
  }

}
