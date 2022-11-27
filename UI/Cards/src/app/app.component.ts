import { Component, OnInit } from '@angular/core';
import { Cards } from './Models/card.model';
import { CardsService } from './Service/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Cards';
  cards: Cards[] = [];

  card: Cards = {
    id: '',
    cardholderName: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: ''
  }

  constructor(private cardsService: CardsService) {

  }

  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards() {
    this.cardsService.getAllCards()
    .subscribe(
      response => {
        this.cards = response;
        console.log(response);
      }
    );
  }

  onSubmit() {

    if (this.card.id === '') {        // if it's a new info then add it
      this.cardsService.addCard(this.card)
      .subscribe(
        response => {
          // console.log(response);
          this.getAllCards();
          // clear the card everytime
          this.card = {
            id: '',
            cardholderName: '',
            cardNumber: '',
            expiryMonth: '',
            expiryYear: '',
            cvc: ''
          };
        }
      )
    }
    else {                     // or update the information
      this.updateCard(this.card);
    }
  }

  deleteCard(id: string) {
    this.cardsService.deleteACard(id)
    .subscribe(
      response => {
        this.getAllCards();
      }
    )
  }
  // update form
  populateForm(card: Cards) {
    this.card = card;
  }

  updateCard(card: Cards) {
    this.cardsService.updateCard(card)
    .subscribe(
      response => {
        this.getAllCards();
      }
    );
  }
}
