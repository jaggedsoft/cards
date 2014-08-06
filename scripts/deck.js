define(['card'], function (Card) {

  var suits = ['clubs', 'hearts', 'spades', 'diamonds'];

  var Deck = function () {
    this.cards = [];
    for(var i = 2; i <= 14; i++){
      _.each(suits, function (suit) {
        this.cards.push(new Card(suit, i));
      }, this);
    }
  };

  return Deck;

});